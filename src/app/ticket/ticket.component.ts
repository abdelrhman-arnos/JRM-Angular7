import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import * as countries from '../../assets/countries.json';

@Component({
  name: 'CreateTicketPage',
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})
export class TicketComponent {
  countries: any;
  ticketForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    governorate: new FormControl(''),
    city: new FormControl('EG'),
    details: new FormControl('')
  });

  constructor() {
    this.countries = countries;
  }

  onSubmit() {
    console.log(this.ticketForm);
  }
}
