import {Component, ViewChild} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import * as egList from 'src/assets/eg.json';
import {CountdownComponent} from 'ngx-countdown';


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

  @ViewChild(CountdownComponent) counter: CountdownComponent;

  constructor(private router: Router) {
    this.id = 1;
    this.date = new Date();
    this.egList = egList;
  }

  stopCounter() {
    this.sec5 = 5;
    const interval = setInterval(() => {
      this.sec5--;
      console.log(this.sec5);
      if (this.sec5 < 1) {
        clearInterval(interval);
        this.onSubmit();
      }
    }, 1000);
    this.counter.stop();
  }

  setCities() {
    const id = parseInt(this.ticketForm.value.governorate, 0);
    this.subRegions = this.egList.default.find(item => item.id === id).subregions;
  }

  onSubmit() {
    this.router.navigate(['/']);
  }
}
