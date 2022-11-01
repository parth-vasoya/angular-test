import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links = [
    {'label': 'Contact us', 'url' : '#'},
    {'label': 'About us', 'url' : '#'},
    {'label': 'Map', 'url' : '#'},
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
