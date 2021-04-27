import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    NbCardModule,
    Ng2SmartTableModule
  ]
})
export class CustomerModule { }
