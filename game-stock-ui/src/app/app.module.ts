import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameService} from './game.service';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        GameSearchComponent,
        routingComponents
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,        
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule

    ],
    providers: [GameService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
