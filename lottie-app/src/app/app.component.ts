import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lottie-app';

  options: AnimationOptions = {
    path: '/assets/confetti.json',
    loop: false,
  };

  constructor() {

  }

}
