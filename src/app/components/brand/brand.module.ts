import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './brand-list/brand-list.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [BrandListComponent],
  exports: [
    BrandListComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
  ]
})
export class BrandModule { }
