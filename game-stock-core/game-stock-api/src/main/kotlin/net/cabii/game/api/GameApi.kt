package net.cabii.game.api

import com.mongodb.client.model.Filters
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.locations.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import kotlinx.serialization.Serializable
import net.cabii.game.models.Game
import org.bson.types.ObjectId
import org.litote.kmongo.coroutine.CoroutineDatabase

class GameApi(db: CoroutineDatabase) {
    val collection = db.getCollection<Game>("games")

    @Serializable
    data class GamesResult(val total: Long, val results: List<Game>)

    @Location("{gameId}")
    data class GameId(val gameId: ObjectId)

    fun Routing.crud() {
        route("/games") {
            get {
                val page = call.request.headers["page"]?.toIntOrNull() ?: 1
                val pageSize = call.request.queryParameters["pageSize"]?.toIntOrNull() ?: 10
                val skip = if (page < 1) { 1 } else { (page - 1) * pageSize }
                val limit = pageSize
                val games = collection.find().skip(skip).limit(limit).toList()
                val results = GamesResult(collection.countDocuments(), games)
                call.respond(results)
            }
            get<GameId> { gameId ->
                val query = Filters.eq(gameId.gameId)
                val game = collection.find(query).first()
                if (game == null) {
                    call.respond(HttpStatusCode.NotFound)
                } else {
                    call.respond(game)
                }
            }
            post {
                val newGame = call.receive<Game>()
                val result = collection.insertOne(newGame)
                call.respond(newGame._id)
            }
            delete<GameId> { gameId ->
                val query = Filters.eq(gameId.gameId)
                val deleteResult = collection.deleteOne(query)
                if (deleteResult.deletedCount > 0) {
                    call.respond(HttpStatusCode.OK)
                } else {
                    call.respond(HttpStatusCode.NotFound)
                }
            }
        }
    }
}
