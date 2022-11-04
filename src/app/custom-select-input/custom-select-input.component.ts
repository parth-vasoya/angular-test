import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

export interface CountryInterface {
  id: number,
  name: string
}

@Component({
  selector: 'app-custom-select-input',
  templateUrl: './custom-select-input.component.html',
  styleUrls: ['./custom-select-input.component.scss']
})
export class CustomSelectInputComponent implements OnInit {

  @Input('options') options: CountryInterface[] = [];
  @Input('selectedOption') selectedOption: String = '';
  @Output() onSelect = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectChange(value: string) {
    console.log(value);
    this.onSelect.emit(value);
  }
}
