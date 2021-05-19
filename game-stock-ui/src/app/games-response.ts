import { Game } from "./model/game";

export interface GamesReponse {
    total: number,
    results: Game[]
}