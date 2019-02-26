import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormatDateService {

  formatDate() {
    const d = new Date();
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    const year = d.getFullYear();
    month = month.length < 2 ? `0${month}` : month;
    day = day.length < 2 ? `0${day}` : day;
    return [year, month, day].join('-');
  }

  formatTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? parseInt(`0${minutes}`, 0) : minutes;
    return `${hours}:${minutes} ${ampm}`;
  }
}
