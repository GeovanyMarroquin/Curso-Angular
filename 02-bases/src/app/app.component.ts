import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public counter: number = 10;

  increaseBy(i: number): void {
    this.counter += i;
  }

  resetCounter(): void{
    this.counter = 10;
  }
}
