import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero = hero;
}

export class Hero {
  id: number;
  name: string;
  superpower: string;
  healthpoints: number;
}

let hero: Hero = {
  id: 1,
  name: 'Hellgate',
  superpower: 'The ability to leap tall buildings.',
  healthpoints: 35
};
