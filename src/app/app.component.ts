import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get env(): typeof environment {
    return environment;
  }

  constructor() {
    console.log(environment.API_KEY);
  }
}
