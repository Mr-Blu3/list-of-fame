import {NgModule}from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamePlayersComponent} from "./components/game-players/game-players.component";

const routes: Routes = [
  {path: '', component: GamePlayersComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRouting {}
