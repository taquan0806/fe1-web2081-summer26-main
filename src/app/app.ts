import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'Ta Quan';
  age = 19;

  // // method -> event binding (click)
  // sayHello() {
  //   alert('Hello from App Component');
  //   console.log('Hello from App Component');
  // }

  // delete() {
  //   console.log('Delete button clicked');
  // }
  handleClick() {
    alert('Bạn đã click button');
  }
}
