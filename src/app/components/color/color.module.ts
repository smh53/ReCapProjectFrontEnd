import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorListComponent } from './color-list/color-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [ColorListComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule
  ]
})
export class ColorModule { }
