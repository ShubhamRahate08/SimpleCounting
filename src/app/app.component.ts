import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    if(this.counter>0) this.counter--;
  }

  reset() {
    this.counter=0
  }

}
