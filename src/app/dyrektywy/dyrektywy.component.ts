import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dyrektywy',
  templateUrl: './dyrektywy.component.html',
  styleUrls: ['./dyrektywy.component.css']
})
export class DyrektywyComponent implements OnInit {
  days: string[] = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
  dog: Array<Dog> = new Array<Dog>();
  constructor() {
    this.dog.push(new Dog('reks', 4), new Dog('maks', 7), new Dog('test', 15));
   }
  ngOnInit() {
  }
addDog() {
  this.dog.push(new Dog('dodany', 6));
}
removeDog() {
  this.dog.pop();
}
}

class Dog {
  constructor ( public name: string, public age: number) {

  }
}
