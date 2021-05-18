import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameService} from './game.service';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameInputFormComponent } from './game-input-form/game-input-form.component';


@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        GameSearchComponent,
        GameInputFormComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule

    ],
    providers: [GameService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
