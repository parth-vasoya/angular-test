import {Component, ElementRef, ViewChild} from '@angular/core';

export interface CountryInterface {
  id: number,
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isVisible = false;
  buttonText = 'Show Answer';
  type = '';
  selectedCountry = 'India';
  public countries: CountryInterface[] = [
    {'id': 1, 'name': 'India'},
    {'id': 2, 'name': 'UK'},
    {'id': 3, 'name': 'USA'},
    {'id': 4, 'name': 'Canada'},
  ];
  @ViewChild('inputField') inputField = ElementRef;

  showAnswer() {
    this.isVisible = !this.isVisible;
    this.buttonText = (this.isVisible) ? 'Hide Answer' : 'Show Answer';
  }

  update() {
    console.log(this.type);
  }

  updateValue(value: string) {
    console.log(value,this.inputField)
    this.selectedCountry = value;
    // this.inputField.nativeElement.value = value;
  }
}
