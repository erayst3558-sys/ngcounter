import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count=0;
  handleIncrement() {
    this.count++;
  }
  handleDecrement() {
    this.count--;
  }
  handleReset() {
    this.count = 0;
  }
  protected readonly title = signal('tutorial');
  
}
