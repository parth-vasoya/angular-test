import {Component, OnInit} from '@angular/core';

export interface LinkInterface {
  label: String,
  url: String
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public links: LinkInterface[] = [
    {'label': 'Contact us', 'url': '#'},
    {'label': 'About us', 'url': '#'},
    {'label': 'Map', 'url': '#'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
