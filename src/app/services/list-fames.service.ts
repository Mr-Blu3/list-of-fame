import { Injectable } from '@angular/core';
import {GamePlayersInterface} from "../shared/interfaces/Game-players.interface";
import {PersonClass} from "../shared/mock-data/classes/game-players/game-players.component";
import {MOCK_PERSON} from "../shared/mock-data/game-players.mock-data";

@Injectable()
export class ListFamesService {

  folks: GamePlayersInterface[] = MOCK_PERSON.GamePlayers

  getHeadlines(): Object[]
  {
    return [
      {name: 'First Name', classes: 'w-10'},
      {name: 'Last Name', classes: 'w-10'},
      {name: 'Description'},
      {name: 'Age'},
      {name: 'Interest'},
      {name: 'Edit'},
      {name: 'Remove'}
    ];
  }

  getFolks(): Promise<GamePlayersInterface[]>
  {
    return new Promise(resolve => setTimeout(() => resolve(this.folks), 2000))
  }

  savePerson(values: GamePlayersInterface, row: GamePlayersInterface): Promise<GamePlayersInterface[]>
  {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.folks = this.folks.map(folk => {
        if (folk === row) folk = {
          firstName: values.firstName, lastName: values.lastName,
          description: values.description,
          age: values.age, interest: values.interest
        }

        return folk
      })), 1000)})
  }

  deletePerson(folk: GamePlayersInterface): Promise<GamePlayersInterface[]>
  {
    return new Promise(resolve => setTimeout( () => resolve(this.folks = this.folks.filter(data => data !== folk )), 500))
  }

  createNewPersonEmit(fields: string[]): Object
  {
    let trimSpaceArr: string[] = fields.map(field => {
      if(field === "") field = 'Space dude';
      return field.trim();
    });

    return {
      firstName: trimSpaceArr[0],
      lastName: trimSpaceArr[1],
      age: trimSpaceArr[2],
      description: trimSpaceArr[3],
      interest: trimSpaceArr[4]
    }
  }

  newPersonInsert(newPerson): Promise<GamePlayersInterface>
  {
    return new Promise(resolve => setTimeout(() => resolve(new PersonClass([newPerson]).GamePlayers[0]), 500))
  }
}
