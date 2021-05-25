import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from '../model/game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GameDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Game) { }

  ngOnInit(): void {
  }

  getPlayerAgeString(min: number | undefined, max: number | undefined): string{
    if (max) {
      return `${min}-${max}`
    }
    else if (min){
      return `${min}+`
    }
    else {
      return ''
    }
  }

}
