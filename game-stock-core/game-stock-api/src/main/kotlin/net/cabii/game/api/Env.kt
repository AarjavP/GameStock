package net.cabii.game.api

import org.litote.kmongo.coroutine.CoroutineClient
import org.litote.kmongo.coroutine.CoroutineDatabase

class Env(
    val mongo: CoroutineClient,
    val db: CoroutineDatabase,
)
