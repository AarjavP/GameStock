package net.cabii.game.api

import com.fasterxml.jackson.module.kotlin.KotlinModule
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.jackson.*
import io.ktor.locations.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import org.litote.kmongo.coroutine.CoroutineDatabase
import org.litote.kmongo.id.jackson.IdJacksonModule

class GameStockApp {

    fun createServer(port: Int): NettyApplicationEngine = embeddedServer(Netty, port) {
        install(ContentNegotiation) {
            jackson {
                registerModule(KotlinModule())
                registerModule(IdJacksonModule())
            }
        }
        install(CORS) {
            allowNonSimpleContentTypes = true
            anyHost()
        }
        install(DataConversion) {
            objectId()
        }
        install(Locations)
    }

    fun registerRoutes(db: CoroutineDatabase, inRouting: Routing) {
        val gameApi = GameApi(db)
        inRouting.apply {
            gameApi.apply { crud() }
        }
    }
}


