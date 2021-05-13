package net.cabii.game.models

import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import org.litote.kmongo.Id
import org.litote.kmongo.newId

@Serializable
data class Game(
    @Contextual
    val _id: Id<Game> = newId(),
    val name: String,
    val description: String,
    val tags: Set<String>,
    val category: String,
    val suggestedNumberOfPlayers: PlayerCount,
    val maturityRating: MaturityRating,
    val ageGroup: AgeGroup,
    val userRating: Double,
    val complexityRating: Double,
    val buyLinks: List<String>,
    val similarGames: Set<@Contextual Id<Game>>,
    val media: List<GameMedia>,
    val howToPlay: String,
    val materialsNeeded: Set<String>,
)

@Serializable
data class GameMedia(
    val url: String,
    val type: String,
)

@Serializable
data class AgeGroup(val minAge: Int, val maxAge: Int? = null)
@Serializable
data class PlayerCount(val minPlayers: Int, val maxPlayers: Int? = null)
enum class MaturityRating(val displayName: String) {
    EARLY_CHILDHOOD("Early Childhood"),
    EVERYONE("Everyone"),
    EVERYONE_10("Everyone 10+"),
    TEEN("Teen"),
    MATURE("Mature"),
    RATING_PENDING("Rating Pending"),
    ADULT_ONLY("Adults Only")
}


