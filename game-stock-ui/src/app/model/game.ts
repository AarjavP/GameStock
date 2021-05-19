export class Game {
  constructor(
    public name: string,
    public description: string,
    public tags: string[],
    public category: string,
    public suggestedNumberOfPlayers: PlayerCount,
    public maturityRating: MaturityRating,
    public ageGroup: AgeGroup,
    public userRating: number,
    public complexityRating: number,
    public buyLinks: string[],
    public similarGames: string[],
    public media: GameMedia[],
    public howToPlay: string,
    public materialsNeeded: string[],
    public _id?: string
  ) {}
}

export class PlayerCount {
  constructor(public minPlayers: number, public maxPlayers?: number) {}
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

export class AgeGroup {
  constructor(public minAge: number, public maxAge?: number) {}
}

export class GameMedia {
  constructor(public url: string, public type: string) {}
}

