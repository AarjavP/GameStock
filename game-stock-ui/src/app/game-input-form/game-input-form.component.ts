import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { GameService } from '../game.service';
import { AgeGroup, Game, GameMedia, MaturityRating, PlayerCount } from '../model/game';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-game-input-form',
  templateUrl: './game-input-form.component.html',
  styleUrls: ['./game-input-form.component.css']
})
export class GameInputFormComponent implements OnInit {
  gameMediaList: GameMedia[];
  gameModel: Game;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  constructor(private gameService: GameService) {
    this.gameMediaList = []
    this.gameModel = new Game('', '', [], '', new PlayerCount(undefined, undefined), MaturityRating.EVERYONE, new AgeGroup(0,), 0, [], [], this.gameMediaList, '', []);
  }



  ngOnInit(): void {
  }


  createGame() {
    this.gameService.createGame(this.gameModel).subscribe()
  }

  addMedia(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.gameMediaList.push(
        new GameMedia(value, '')
      );
    }

    event.input.value = ''
  }

  removeMedia(media: GameMedia): void {
    const index = this.gameMediaList.indexOf(media);

    if (index >= 0) {
      this.gameMediaList.splice(index, 1);
    }
  }

}
