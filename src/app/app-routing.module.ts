import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { RentalListComponent } from './components/rental/rental-list/rental-list.component';


const routes: Routes = [
  { path: 'brand-list', component: BrandListComponent },
  { path: 'color-list', component: ColorListComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'car-list', component: CarListComponent },
  { path: 'rental-list', component: RentalListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
