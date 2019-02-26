import {Component, Input} from '@angular/core';
import {FormatDateService} from 'src/app/services/format-date/format-date.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent {
  @Input() id: number;
  @Input() date: any;
  @Input() icon: string;
  @Input() title: string;
  @Input() hiddenInfo: boolean;

  constructor(public utils: FormatDateService) {
  }
}
