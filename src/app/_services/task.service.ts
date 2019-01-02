import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Task } from '../_model/task';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // private taskList: Array<Task> = new Array<Task>();
  // private donetask: Array<Task> = [];
  private taskListObs = new BehaviorSubject<Array<Task>>([]); // lub inicjalizuj pustalista  []
  // private taskListObs = new Subject<Array<string>>();
  // private taskDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {
    // console.log('taskService service');
    // const taskList = [
    //   {name: 'wspinanie', created: new Date().toLocaleString(), isDone: false},
    //   {name: 'programowanie', created: new Date().toLocaleString(), isDone: false},
    //   {name: 'spanie', created: new Date().toLocaleString(), isDone: false},
    //   {name: 'jedzenie', created: new Date().toLocaleString(), isDone: false},
    //   {name: 'c#', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true}
    // ];
    // this.taskListObs.next(taskList);
    this.httpService.getTask().subscribe(data => {
      this.taskListObs.next(data);
    });
   }

   add(task: Array<Task>) {
    const list = this.taskListObs.getValue().concat(task);
    this.taskListObs.next(list);
   }

  remove(task: Task) {
    const list = this.taskListObs.getValue().filter(e => e !== task);
    this.taskListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.taskListObs.getValue();
    this.taskListObs.next(list);
    // this.donetask.push(task);
    // this.remove(task);
    // this.taskDoneObs.next(this.donetask);
  }

  // // receiveTask(task: Task) {
  // //   // .taskList.push(task);
  // // }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  // getTaskDoneObs(): Observable<Array<Task>> {
  //   return this.taskDoneObs.asObservable();
  // }

  savetasksInDb() {
    this.httpService.addTasks(this.taskListObs.getValue());
  }
}


