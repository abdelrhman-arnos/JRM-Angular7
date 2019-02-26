declare function require(path: string);

import {Component, Input, OnInit} from '@angular/core';
import {FormatDateService} from 'src/app/services/format-date/format-date.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
  @Input() id: number;
  @Input() date: any;
  @Input() type: string;
  @Input() title: string;
  @Input() hiddenInfo: boolean;
  headerIcon: string;
  orcaLogo: string = require('src/assets/img/Orca-Logo-Header.png');
  userIcon: string = require('src/assets/img/User-Icon.png');
  dateIcon: string = require('src/assets/img/Date-Listing.png');
  timeIcon: string = require('src/assets/img/Time-Icon.png');

  constructor(public utils: FormatDateService) {
  }

  ngOnInit() {
    switch (this.type) {
      case 'create':
        this.headerIcon = require('src/assets/img/Ticket-Details-Icon.png');
        break;
      case 'edit':
        this.headerIcon = require('src/assets/img/Edit-Details-Icon.png');
        break;
      case 'listing':
        this.headerIcon = require('src/assets/img/Listing-Icon.png');
        break;
    }
  }
}
