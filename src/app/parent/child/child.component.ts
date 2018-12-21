import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() tasks: [];

@Output() eventTask = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }
select(task) {
  this.eventTask.emit(task);
}
}
