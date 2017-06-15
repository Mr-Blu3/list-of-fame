import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ComponentsModule} from "./components/components.module";

import { AppComponent } from './app.component';
import { GamePlayersComponent } from './components/game-players/game-players.component';
import {SharedModule} from "./shared/shared.module";
import {AppRouting} from "./app.route";

@NgModule({
  declarations: [
    AppComponent,
    GamePlayersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    SharedModule,
    AppRouting

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
