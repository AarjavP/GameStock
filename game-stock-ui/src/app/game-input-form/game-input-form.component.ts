import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { AgeGroup, Game, MaturityRating, PlayerCount } from '../model/game';

@Component({
  selector: 'app-game-input-form',
  templateUrl: './game-input-form.component.html',
  styleUrls: ['./game-input-form.component.css']
})
export class GameInputFormComponent implements OnInit {


  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  gameModel: Game = new Game( '', '', [], '', new PlayerCount(0,), MaturityRating.EVERYONE, new AgeGroup(0,), 0, 0, [], [], [], '', []);


  createGame() {
    this.gameService.createGame(this.gameModel).subscribe()
  }




}
