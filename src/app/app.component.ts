import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
  clickMessage = '';
  loginControl: FormControl = new FormControl('');
  onClick(){
    this.clickMessage = 'you are my hero';
  }
}
class Car{
  public engine: string;
  constructor(engine: string){
    this.engine = engine;
  }
  drive(distanceInMeters: string = '0'): string{
    return distanceInMeters;
  }
}
class MotoCar extends Car {
  constructor(engine: string) {
    super(engine);
  }
  drive(distanceInMeters: string = '50'): string{
    return super.drive(distanceInMeters);
  }
}
