declare function require(path: string);

import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import * as egList from 'src/assets/eg.json';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.sass']
})

export class ListingComponent {
  egList: any;
  subRegions: any;
  dateIcon: string = require('src/assets/img/Date-Listing.png');
  timerIcon: string = require('src/assets/img/Timer-Icon.png');
  editIcon: string = require('src/assets/img/Edit-button.png');
  deleteIcon: string = require('src/assets/img/Delete-Button.png');
  filterForm = new FormGroup({
    type: new FormControl(''),
    governorate: new FormControl(''),
    city: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl('')
  });
  tickets = [
    {
      id: 1,
      name: 'Ticket name',
      type: 'Fire',
      city: 'Nasr-city',
      governorate: 'Cairo',
      date: '6/2/2019',
      time: '10:30 am'
    }
  ];

  constructor() {
    this.egList = egList;
  }

  setCities() {
    const id = parseInt(this.filterForm.value.governorate, 0);
    this.subRegions = this.egList.default.find(item => item.id === id).subregions;
  }

  onSubmit() {
    console.log(this.filterForm);
  }

}
