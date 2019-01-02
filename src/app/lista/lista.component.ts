import { Component, OnInit } from '@angular/core';
import { TaskService } from '../_services/task.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private taskService: TaskService) {}
  ngOnInit() {

  }
  saveTasks() {
    this.taskService.savetasksInDb();
  }
}
