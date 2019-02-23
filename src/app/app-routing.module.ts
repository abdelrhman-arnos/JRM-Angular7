import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListingComponent} from './listing/listing.component';
import {TicketComponent} from './ticket/ticket.component';

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
  {
    path: 'create-ticket',
    component: TicketComponent,
    data: {title: 'ORCA TECH | Create a ticket'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
