import { Component, OnInit } from "@angular/core";
import { GameService } from "../game.service";

@Component({
  selector: "app-game-detail",
  template: `
    <h2>Game Detail</h2>
    <ul *ngFor="let game of games">
      <li>{{ game.name }} - {{game.players}}</li>
    </ul>
  `,
  styles: [],
})
export class GameDetailComponent implements OnInit {
  public games = [] as any;

  constructor(private _gameService: GameService) {}

  ngOnInit(): void {
    this.games = this._gameService.getGames();
  }
}
