import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [CarListComponent],
  imports: [
    CommonModule,
    NbCardModule,
    Ng2SmartTableModule
  ]
})
export class CarModule { }
