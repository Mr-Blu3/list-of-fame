import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MOCK_PERSON} from "../../shared/mock-data/game-players.mock-data";
import {PersonClass} from "../../shared/mock-data/classes/game-players/game-players.component";
import {ListFamesService} from "../../services/list-fames.service";

@Component({
  selector: 'create-details',
  template: `
  <div class="card-header">
    <h4>Information details</h4>
  </div>

  <div class="card-body">
    <input #firstName class="form-control" type="text" name="firstName" placeholder="First Name"><br />
    <input #lastName class="form-control" type="text" name="lastName" placeholder="Last Name"><br />
    <textarea #description class="form-control" name="description" placeholder="Description"></textarea><br />
    <input #age class="form-control" type="number" name="age" placeholder="Age"><br />
    <input #interest class="form-control" type="text" name="interest" placeholder="Interest"><br />
    <button class="w-100 btn btn-primary"
            style="cursor: pointer;"
            (click)="addInFame([firstName.value, lastName.value, description.value, age.value, interest.value]); firstName.value = ''; lastName.value = ''; description.value = ''; age.value = ''; interest.value = ''">
    Ok!
    </button>
</div>`
})
export class CreateDetailsComponent implements OnInit {

  @Output()
  InsertOneInFame = new EventEmitter();

  constructor(private ListFamesService: ListFamesService) { }

  ngOnInit() {}

  addInFame(fields: string[])
  {
    this.InsertOneInFame.emit(this.ListFamesService.createNewPersonEmit(fields));
  }

}
