import { Component, OnInit } from "@angular/core";
import { GameService } from "../game.service";

@Component({
  selector: "app-game-list",
  template: `
    <div
      *ngFor="let gameCategories of games | keyvalue"
      class="column is-one-quarter"
    >
      <div class="box">
        <h3 class="title">{{ gameCategories.key }}</h3>
        <ul>
          <li *ngFor="let obj of gameCategories.value">
            <a href="{{ obj.link }}">{{ obj.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [],
})
export class GameListComponent implements OnInit {
  public games = {};

  constructor(private _gameService: GameService) {}

  ngOnInit(): void {
    this.games = this._gameService.getGames();
  }
}
