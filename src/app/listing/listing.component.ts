import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import * as countries from '../../assets/countries.json';

@Component({
  name: 'ListingPage',
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.sass']
})

export class ListingComponent {
  countries: any;
  filterForm = new FormGroup({
    type: new FormControl(''),
    governorate: new FormControl(''),
    city: new FormControl('EG'),
    date: new FormControl(''),
    time: new FormControl('')
  });

  constructor() {
    this.countries = countries;
  }

  onSubmit() {
    console.log(this.filterForm);
  }

}
