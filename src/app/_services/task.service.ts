import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Task } from '../_model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskList: Array<Task> = new Array<Task>();
  private donetask: Array<Task> = [];
  private taskListObs = new BehaviorSubject<Array<Task>>([]); // lub inicjalizuj pustalista  []
  // private taskListObs = new Subject<Array<string>>();
  private taskDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    console.log('taskService service');
    this.taskList = [
      {name: 'wspinanie', created: new Date()},
      {name: 'programowanie', created: new Date()},
      {name: 'spanie', created: new Date()},
      {name: 'jedzenie', created: new Date()}
    ];
    this.taskListObs.next(this.taskList);
   }

   add(task: Task) {
    this.taskList.push(task);
    this.taskListObs.next(this.taskList);
   }

  remove(task: Task) {
    this.taskList = this.taskList.filter(e => e !== task);
    this.taskListObs.next(this.taskList);
  }

  done(task: Task) {
    this.donetask.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.donetask);
  }

  receiveTask(task: Task) {
    this.taskList.push(task);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  getTaskDoneObs(): Observable<Array<Task>> {
    return this.taskDoneObs.asObservable();
  }
}


