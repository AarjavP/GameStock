import { Component, OnInit } from "@angular/core";
import { Game } from "../game";
import { GameService } from "../game.service";
import {GamesReponse} from "../games-response";

@Component({
  selector: "app-game-list",
  template: `
    <div
      *ngFor="let game of games"
      class="column is-one-quarter"
    >
      <div class="box">
        <h3 class="title">{{ game.name }}</h3>
      </div>
    </div>
  `,
  styles: [],
})
export class GameListComponent implements OnInit {
  public games:Game[] = [];

  constructor(private _gameService: GameService) {}

  ngOnInit(): void {
    this._gameService.getGames().subscribe((data : GamesReponse) => {
      this.games = data.results
    });
  }
}
