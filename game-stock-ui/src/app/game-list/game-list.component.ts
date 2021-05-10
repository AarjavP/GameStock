import { Component, OnInit } from "@angular/core";
import { GameService } from "../game.service";

@Component({
  selector: "app-game-list",
  template: `
    <h2>Game List</h2>
    <ul *ngFor="let game of games">
      <li>{{ game.name }}</li>
    </ul>
  `,
  styles: [],
})
export class GameListComponent implements OnInit {
  public games = [] as any;

  constructor(private _gameService: GameService) {}

  ngOnInit(): void {
    this.games = this._gameService.getGames();
  }
}
