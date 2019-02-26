import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CountdownModule} from 'ngx-countdown';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TicketComponent} from './ticket/ticket.component';
import {HeaderModule} from 'src/app/modules/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
