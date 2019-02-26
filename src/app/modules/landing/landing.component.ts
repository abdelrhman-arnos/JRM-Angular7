declare function require(path: string);
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})

export class LandingComponent {
  @Input() link: string;
  orcaLogo: string = require('src/assets/img/Orca-Logo-Welcome.png');
}
