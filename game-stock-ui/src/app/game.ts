export interface Game {
    _id: string,
    name: string,
    description: string,
    tags: string[],
    category: string,
    suggestedNumberOfPlayers: PlayerCount,
    maturityRating: MaturityRating,
    ageGroup: AgeGroup,
    userRating: number,
    complexityRating: number,
    buyLinks: string[],
    similarGames: string[],
    media: GameMedia[],
    howToPlay: string,
    materialsNeeded: string[]
}

export interface PlayerCount {
    minPlayers: number,
    maxPlayers?: number
}

export enum MaturityRating {
    EARLY_CHILDHOOD,
    EVERYONE,
    EVERYONE_10,
    TEEN,
    MATURE,
    RATING_PENDING,
    ADULT_ONLY,
}

export interface AgeGroup {
    minAge: number,
    maxAge?: number
}

export interface GameMedia {
    url:string,
    type:string
}
