package net.cabii.game.models

fun main() {
//    val game = Game(
//        _id = newId(),
//        name = "Mafia3",
//        description = "Kill or be killed",
//        tags = setOf("Mystery"),
//        category = "Indoor",
//        suggestedNumberOfPlayers = PlayerCount(minPlayers = 4),
//        maturityRating = MaturityRating.TEEN,
//        ageGroup = AgeGroup(minAge = 14),
//        userRating = 20.0,
//        complexityRating = 2.0,
//        buyLinks = listOf(""),
//        similarGames = setOf(),
//        media = listOf(GameMedia("https://cdn.discordapp.com/attachments/838276842074931230/840680282029555713/unknown.png", "image/png")),
//        howToPlay = "vote",
//        materialsNeeded = setOf("cards")
//    )
//    val json = Json { serializersModule = IdKotlinXSerializationModule }
//    println(json.encodeToString(game))
    println(isValidSubseq(intArrayOf(1,2,3,4), intArrayOf(1,3,4)))
    println(isValidSubseq(intArrayOf(1), intArrayOf(1)))
}

fun isValidSubseq(array: IntArray, seq: IntArray): Boolean {
    val iterator = array.iterator()
    target@ for (targetN in seq) {
        for (longN in iterator) {
            if (targetN == longN) {
                continue@target
            }
        }
        return false
    }
    return true
}
