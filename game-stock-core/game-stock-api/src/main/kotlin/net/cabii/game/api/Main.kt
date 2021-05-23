package net.cabii.game.api

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.parameters.options.default
import com.github.ajalt.clikt.parameters.options.flag
import com.github.ajalt.clikt.parameters.options.option
import com.github.ajalt.clikt.parameters.options.versionOption
import com.github.ajalt.clikt.parameters.types.int
import com.mongodb.ConnectionString
import io.ktor.routing.*
import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger
import org.litote.kmongo.coroutine.coroutine
import org.litote.kmongo.reactivestreams.KMongo
import java.util.*

class GameStockCli: CliktCommand() {
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
    val mongoPort: Int by option("--mongo-port", help = "port for mongodb", envvar = "MONGO_PORT" ).int().default(27017)
    val mongoDatabase: String by option("--mongo-database", help = "database name", envvar = "MONGO_DATABASE").default("gamestock")

    val log: Logger = LogManager.getLogger("main")

    override fun run() {
        val mongo = KMongo.createClient(ConnectionString("mongodb://$mongoHost:$mongoPort/$mongoDatabase")).coroutine
        val db = mongo.getDatabase(mongoDatabase)
        val app = GameStockApp()
        val server = app.createServer(port)

        try {
            server.start(wait = false)
            server.application.routing {
                app.registerRoutes(db, inRouting = this)
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

fun main(args: Array<String>) {
    GameStockCli().main(args)
}

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
