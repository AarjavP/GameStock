import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameDetailComponent } from '../game-detail/game-detail.component';
import { GameService } from '../game.service';
import { GamesReponse } from '../games-response';
import { Game } from '../model/game';

@Component({
  selector: 'app-games-view',
  templateUrl: './games-view.component.html',
  styleUrls: ['./games-view.component.css']
})
export class GamesViewComponent implements OnInit {

  constructor(private gameService: GameService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getGames();
  }

  games: Game[] = [
  ]

  getGames() {
    return this.gameService.getGames().subscribe(data => {
      this.games = data.results
    })
  }

  openGameDetailDialog(game: Game) {
    const dialogRef = this.dialog.open(GameDetailComponent, {
      // width: '250px',
      data: game
    });
  }

}
