package net.cabii.game.models

import org.litote.kmongo.newId

fun main() {
    val game = Game(
        id = newId(),
        name = "Mafia3",
        description = "Kill or be killed",
        tags = setOf("Mystery"),
        category = "Indoor",
        suggestedNumberOfPlayers = PlayerCount(minPlayers = 4),
        maturityRating = MaturityRating.TEEN,
        ageGroup = AgeGroup(minAge = 14),
        userRating = 20.0,
        complexityRating = 2.0,
        buyLinks = listOf(""),
        similarGames = setOf(),
        media = listOf(GameMedia("https://cdn.discordapp.com/attachments/838276842074931230/840680282029555713/unknown.png", "image/png")),
        howToPlay = "vote",
        materialsNeeded = setOf("cards")
    )

}

