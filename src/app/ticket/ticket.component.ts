import { Component, OnInit } from '@angular/core';
import * as countries from '../../assets/countries.json';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})
export class TicketComponent implements OnInit {
  countries: any;
  constructor() { }

  ngOnInit() {
    this.countries = countries;
  }

}
