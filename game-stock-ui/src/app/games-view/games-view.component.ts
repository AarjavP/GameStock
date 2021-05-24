import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-games-view',
  templateUrl: './games-view.component.html',
  styleUrls: ['./games-view.component.css']
})
export class GamesViewComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  games:Game[] = [
  ]

  getGames() {
    return this.gameService.getGames().subscribe(data => {
      this.games = data.results
    })
  }

}
