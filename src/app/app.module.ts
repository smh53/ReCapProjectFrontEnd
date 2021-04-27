import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbIconModule, NbSidebarModule, NbSidebarService, NbCardModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { BrandModule } from './components/brand/brand.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { ColorModule } from './components/color/color.module';
import { CustomerModule } from './components/customer/customer.module';
import { CarModule } from './components/car/car.module';
import { RentalModule } from './components/rental/rental.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    BrandModule,
    NbMenuModule.forRoot(),
    HttpClientModule,
    ColorModule,
    CustomerModule,
    CarModule,
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
