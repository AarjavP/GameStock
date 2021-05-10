import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GameService {
  constructor() {}

  getGames() {
    return [
      { "id": 1, "name": "Empire", "players": "8+" },
      { "id": 2, "name": "Mafia", "players": "8+" },
      { "id": 3, "name": "game3", "players": "8+" },
      { "id": 4, "name": "game4", "players": "8+" }
    ];
  }
}
