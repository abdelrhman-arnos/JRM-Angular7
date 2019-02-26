import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import * as egList from 'src/assets/eg.json';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})

export class TicketComponent {
  id: number;
  sec5: number;
  date: any;
  egList: any;
  subRegions: any;
  ticketForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    governorate: new FormControl(''),
    city: new FormControl(''),
    details: new FormControl('')
  });

  constructor(public router: Router) {
    this.id = 1;
    this.date = new Date();
    this.egList = egList;
  }

  setCities() {
    const id = parseInt(this.ticketForm.value.governorate, 0);
    this.subRegions = this.egList.default.find(item => item.id === id).subregions;
  }

  onSubmit() {
    this.router.navigate(['/']);
  }
}
