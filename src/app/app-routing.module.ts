import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListingComponent} from './listing/listing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {title: 'ORCA TECH | Home'}
  },
  {
    path: 'listing',
    component: ListingComponent,
    data: {title: 'ORCA TECH | Listing'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
