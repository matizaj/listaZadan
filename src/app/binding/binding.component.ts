import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  binding2Way = '';
  constructor() { }
  data = 'test';
  isDisable = true;
  color = 'color';
  ngOnInit() {
  }

  changeProp() {
    this.isDisable = ! this.isDisable;
    this.color = 'color2';
  }

}
