import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = "Ta Quan";
  age = 19;

  handleClick() {
    alert("Bạn đã click button");
  }
}
