import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/_services/task.service';
import { Task } from 'src/app/_model/task';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent implements OnInit {

  taskList = [];


  constructor(private taskService: TaskService) {
    console.log('taskService komponent');
    taskService.getTaskListObs().subscribe(tasks => {
      this.taskList = tasks.filter(t => t.isDone === false);
    });
   }

  ngOnInit() {
  }
  remove(task: Task) {
    this.taskService.remove(task);
  }
  done(task: Task) {
    task.end = new Date().toLocaleString();
    this.taskService.done(task);
  }
  getColor(): string {
    return this.taskList.length >= 5 ? 'red' : 'green';
  }
  saveTasks() {
    this.taskService.savetasksInDb();
  }

}
