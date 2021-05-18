import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameService} from './game.service';
import {GameListComponent} from './game-list/game-list.component';
import {GameDetailComponent} from './game-detail/game-detail.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


@NgModule({
    declarations: [
        AppComponent,
        GameListComponent,
        GameDetailComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule

    ],
    providers: [GameService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
