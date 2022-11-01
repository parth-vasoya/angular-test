import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isVisible = false;
  buttonText = 'Show Answer';
  type = '';

  showAnswer() {
    this.isVisible = !this.isVisible;
    this.buttonText = (this.isVisible) ? 'Hide Answer' : 'Show Answer';
  }

  update() {
    console.log(this.type);
  }
}
