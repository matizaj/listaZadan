import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/_services/task.service';
import { Task } from 'src/app/_model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  newTask: string;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
  addTask() {
    const task: Task = {name: this.newTask, created: new Date()};
    this.taskService.add(task);
    this.newTask = '';
  }

}
