import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListingComponent} from './listing/listing.component';
import {HomeComponent} from './home/home.component';
import {TicketComponent} from './ticket/ticket.component';
import {HeaderModule} from 'src/app/modules/header/header.module';
import {LandingModule} from 'src/app/modules/landing/landing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    HomeComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
