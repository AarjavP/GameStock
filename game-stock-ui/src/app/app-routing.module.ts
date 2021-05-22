import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameInputFormComponent } from './game-input-form/game-input-form.component';
import { GamesViewComponent } from './games-view/games-view.component';

const routes: Routes = [
  {path:'game-input-form', component: GameInputFormComponent},
  {path:'games', component: GamesViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GameInputFormComponent, GamesViewComponent]