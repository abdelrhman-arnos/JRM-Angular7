import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListingComponent} from './listing/listing.component';
import {TicketComponent} from './ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {title: 'Home'}
  },
  {
    path: 'listing',
    component: ListingComponent,
    data: {title: 'Listing'}
  },
  {
    path: 'ticket/:id',
    component: TicketComponent,
    data: {title: 'Ticket'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
