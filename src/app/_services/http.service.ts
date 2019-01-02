import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../_model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly apiUrl = 'https://api.mlab.com/api/1/databases/lista_db/collections/tasks';
  readonly param = new HttpParams().set('apiKey', 'lTFaERCDOmYMtwQwyzxeImaNWwzCJ8Ca');
  constructor(private http: HttpClient) {
    this.getTask();
   }

  getTask(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.apiUrl, {params: this.param});
  }

  addTasks(tasks: Array<Task>) {
    this.http.put(this.apiUrl, tasks,  {params: this.param}).subscribe(data => {
      console.log(tasks);
    }, error => {
      console.log(error);
    });
  }
}
