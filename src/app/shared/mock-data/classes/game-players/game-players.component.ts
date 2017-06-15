import {GamePlayersInterface} from "../../../interfaces/Game-players.interface";

export class PersonClass {
  GamePlayers: GamePlayersInterface[];

  constructor(GamePlayers: GamePlayersInterface[]) {
    this.GamePlayers = GamePlayers;
  }

}
