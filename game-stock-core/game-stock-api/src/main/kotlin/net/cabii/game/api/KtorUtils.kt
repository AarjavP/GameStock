package net.cabii.game.api

import io.ktor.features.*
import io.ktor.util.*
import org.bson.types.ObjectId

fun DataConversion.Configuration.objectId() {
    convert<ObjectId> {
        decode { values, _ ->
            values.singleOrNull()?.let { ObjectId(it) }
        }
        encode { value ->
            when(value) {
                null -> listOf()
                is ObjectId -> listOf(value.toHexString())
                else -> throw DataConversionException("Connot convert $value as ObjectId")
            }
        }
    }
}
