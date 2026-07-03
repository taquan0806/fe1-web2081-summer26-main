import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
})
export class About {
  name = 'Ta Quan';
  age = 19;

  handleClick() {
    alert('Bạn đã click button');
  }
}