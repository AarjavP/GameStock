package net.cabii.game.api

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.parameters.options.default
import com.github.ajalt.clikt.parameters.options.flag
import com.github.ajalt.clikt.parameters.options.option
import com.github.ajalt.clikt.parameters.options.versionOption
import com.github.ajalt.clikt.parameters.types.int
import com.mongodb.ConnectionString
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.locations.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.serialization.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import kotlinx.serialization.json.Json
import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger
import org.litote.kmongo.coroutine.coroutine
import org.litote.kmongo.id.serialization.IdKotlinXSerializationModule
import org.litote.kmongo.reactivestreams.KMongo
import java.util.*

class GameStockApi: CliktCommand() {
    init {
        versionOption("1.0.0-SNAPSHOT")
    }

    val nonInteractive: Boolean by option("--non-interactive",
        help = "use this when running in docker").flag(default = false)

    val port: Int by option(
        "-p", "--port",
        help = "port number to listen on for api requests",
        envvar = "APP_PORT"
    ).int().default(8080)
    
    
    val mongoHost: String by option("--mongo-host", help = "hostname for mongodb", envvar = "MONGO_HOST").default("localhost")
    val mongoPort: Int by option("--mongo-port", help = "hostname for mongodb", envvar = "MONGO_PORT" ).int().default(27017)
    val mongoDatabase: String by option("--mongo-database", help = "hostname for mongodb", envvar = "MONGO_DATABASE").default("default")

    val log: Logger = LogManager.getLogger("main")

    override fun run() {
        val server = embeddedServer(Netty, port) {
            install(ContentNegotiation) {
                json(json = Json { serializersModule = IdKotlinXSerializationModule })
            }
            install(CORS) {
                anyHost()
            }
            install(DataConversion) {
                objectId()
            }
            install(Locations)
        }

        val mongo = KMongo.createClient(ConnectionString("mongodb://$mongoHost:$mongoPort/$mongoDatabase")).coroutine
        val db = mongo.getDatabase(mongoDatabase)

        val gameApi = GameApi(db)

        try {
            server.start()
            server.application.routing {
                get("/") {
                    call.respondText { "Hello World!" }
                }
                gameApi.apply { crud() }
            }


            if (nonInteractive) {
                dontReturnUtilShutdown()
            } else {
                dontReturnUntilQuitInput()
            }
            log.info("initiating shutdown...")
        } finally {
            server.stop(1_000, 10_000)
        }
        log.info("end of main")
    }
}

fun main(args: Array<String>) = GameStockApi().main(args)

fun dontReturnUtilShutdown() {
    val stick = java.lang.Object()
    val stickNotifier = Thread(Runnable { synchronized(stick) { stick.notifyAll() } })
    Runtime.getRuntime().addShutdownHook(stickNotifier)
    synchronized(stick) {
        try {
            stick.wait()
        } catch (ignored: InterruptedException) {
        }
    }
}

fun dontReturnUntilQuitInput() {
    val scanner = Scanner(System.`in`)
    while (scanner.hasNextLine()) {
        val line = scanner.nextLine()
        if (line.equals("quit", ignoreCase = true)) break
    }
}

