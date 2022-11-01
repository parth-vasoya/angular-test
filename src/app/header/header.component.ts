import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = [
    {'label': 'HOME', 'url': '#'},
    {'label': 'BAND', 'url': '#'},
    {'label': 'TOUR', 'url': '#'},
    {'label': 'CONTACT', 'url': '#'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
