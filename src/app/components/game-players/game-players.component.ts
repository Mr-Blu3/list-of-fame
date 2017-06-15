import {Component} from '@angular/core';
import {PersonClass} from "../../shared/mock-data/classes/game-players/game-players.component";

@Component({
  selector: 'app-game-players',
  template: `
  <div class="container">
    <div class="row">
      <div class="card w-100 mt-5 mb-5">
        <list-fames [newPersonInsert]="newPersonStore"></list-fames>
        <a href="#insertOne" class="m-2 text-center">
          <button class=" w-100 btn btn-secondary fa fa-plus-square" (click)="ShowInsertPeopleClick()" style="cursor: pointer">&nbsp; Press To Be In The List Of Fame</button>
        </a>
      </div>
  
      <div class="step w-100 text-center" [class.show]="showDefSuccesMsgNewPeople">
        <p [hidden]="!showDefSuccesMsgNewPeople">You have inserted a new person in the list of fame</p>
      </div>
      
      <div id="insertOne" [class.show]="showInsertPeopleBool" class="step card w-100 mt-5 mb-5">
        <create-details (InsertOneInFame)="newPerson($event)" [hidden]="!showInsertPeopleBool"></create-details>
      </div>
      
    </div>
  </div>`,
  styleUrls: ['./game-players.component.scss']
})

export class GamePlayersComponent
{
  private showInsertPeopleBool: boolean = false;
  private showDefSuccesMsgNewPeople: boolean = false;
  private newPersonStore: PersonClass;

  constructor() { }

  private newPerson(e)
  {
    this.newPersonStore = e;
    this.showInsertPeopleBool = false;
    this.showDefSuccesMsgNewPeople = (!this.showDefSuccesMsgNewPeople) ? true: false;
  }

  private ShowInsertPeopleClick()
  {
    this.showInsertPeopleBool = (!this.showInsertPeopleBool) ? true : false;
  }
}
