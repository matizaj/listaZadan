import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/_services/task.service';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {
  donetask = [];
  constructor(private taskService: TaskService) {
    taskService.getTaskDoneObs().subscribe( tasks => {
      this.donetask = tasks;
    });
  }

  ngOnInit() {
  }


}
