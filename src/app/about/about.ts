import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
    name = "Ta Quan";
    age = 19;

    handleClick() {
      alert("Bạn đã click button")
    }
}
