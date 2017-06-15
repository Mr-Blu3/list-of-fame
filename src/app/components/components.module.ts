import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFamesComponent } from './list-fames/list-fames.component';
import { CreateDetailsComponent } from './create-details/create-details.component';
import {ListFamesService} from "../services/list-fames.service";

@NgModule({
  exports: [ListFamesComponent, CreateDetailsComponent],
  imports: [CommonModule],
  providers: [ListFamesService],
  declarations: [ListFamesComponent, CreateDetailsComponent]
})
export class ComponentsModule { }
