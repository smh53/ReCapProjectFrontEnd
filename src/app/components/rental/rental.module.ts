import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalListComponent } from './rental-list/rental-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [RentalListComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule
  ]
})
export class RentalModule { }
