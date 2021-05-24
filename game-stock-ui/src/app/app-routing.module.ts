import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameInputFormComponent } from './game-input-form/game-input-form.component';
import { GamesViewComponent } from './games-view/games-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: '/games', pathMatch: 'full'},
  {path:'game-input-form', component: GameInputFormComponent},
  {path:'games', component: GamesViewComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GameInputFormComponent, GamesViewComponent, PageNotFoundComponent]