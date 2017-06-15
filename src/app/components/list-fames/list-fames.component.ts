import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {GamePlayersInterface} from "../../shared/interfaces/Game-players.interface";
import {ListFamesService} from "../../services/list-fames.service";

@Component({
  selector: 'list-fames',
  templateUrl: 'list-fames.component.html',
  styleUrls: ['list-fames.component.scss']
})
export class ListFamesComponent implements OnChanges,OnInit {

  @Input() newPersonInsert: GamePlayersInterface;

  showEditPerson: GamePlayersInterface;
  tableHeaders: Object[] = this.ListFamesService.getHeadlines();
  folks: GamePlayersInterface[] = [];

  showEditBool: boolean = false;
  noRows: boolean = false;

  constructor(private ListFamesService: ListFamesService) {}

  ngOnInit()
  {
    this.ListFamesService.getFolks().then(folks => this.folks = folks).catch(err => console.log(err))
  }

  ngOnChanges()
  {
    if(!this.newPersonInsert) return;

    this.ListFamesService.newPersonInsert(this.newPersonInsert).then(folk => this.folks.unshift(folk)).catch(err => console.log(err))
    this.noRows = false;
  }

  deletePerson(folk: GamePlayersInterface)
  {
    this.ListFamesService.deletePerson(folk).then(folks => this.folks = folks).catch(err => console.log(err))

    this.showEditBool = false;
    if(this.folks.length < 1) this.noRows = true;
  }

  ShowEditPerson(s_folk: GamePlayersInterface)
  {
    this.showEditPerson = s_folk;
    this.showEditBool = (!this.showEditBool) ? true : false;
  }

  savePerson(values: GamePlayersInterface, row: GamePlayersInterface)
  {
    if(!this.showEditBool)
      this.ListFamesService.savePerson(values, row)
      .then(folks => this.folks = folks)
      .catch(err => console.log(err));
  }
}
