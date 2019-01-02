import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/_services/task.service';
import { Task } from 'src/app/_model/task';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addForm: FormGroup;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.addForm = this.initForm();
  }
  addTask() {
    const taskList = this.createTaskList();
    this.taskService.add(taskList);
    this.addForm = this.initForm();
  }
  initForm() {
    return new FormGroup({
      taskName: new FormArray([new FormControl(null, Validators.required)])
    });
  }
  addField() {
    const arr = <FormArray>this.addForm.get('taskName');
    arr.push(new FormControl(null, Validators.required));
  }

  createTaskList(): Array<Task> {
    const taskList = new Array<Task>();
    const taskArr = <[string]>this.addForm.get('taskName').value;
    taskArr.forEach(taskName => {
      const task = {name: taskName, created: new Date().toLocaleString(), isDone: false};
      taskList.push(task);
    });
    return taskList;
  }

}
