import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('childref') childField: ChildComponent;
  @ViewChild('inputText') input: ElementRef;

  tasksList = ['spanie', 'wspinanie', 'jedzenie', 'programowanie'];
  constructor() { }

  ngOnInit() {
  }
  selected(task: string): void {
    alert(task);
  }

  add(text: HTMLInputElement) {
    this.tasksList.push(text.value);
    // this.childField.tasks = [];
    this.input.nativeElement.value = '';
  }
}
