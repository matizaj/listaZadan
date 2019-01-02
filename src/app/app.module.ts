import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DyrektywyComponent } from './dyrektywy/dyrektywy.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { AddTaskComponent } from './lista/add-task/add-task.component';
import { ToDoTaskComponent } from './lista/to-do-task/to-do-task.component';
import { DoneTaskComponent } from './lista/done-task/done-task.component';
import { TaskService } from './_services/task.service';
import { CheckedDirective } from './_common/checked.directive';
import { DateDirective } from './_common/date.directive';
import { TranformTaskPipe } from './_common/tranform-task.pipe';
import { SortNamePipe } from './_common/sort-name.pipe';
import { HttpService } from './_services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModel } from './app.routing.model';

@NgModule({
  declarations: [
    AppComponent,
    DyrektywyComponent,
    BindingComponent,
    ListaComponent,
    ParentComponent,
    ChildComponent,
    AddTaskComponent,
    ToDoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TranformTaskPipe,
    SortNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModel,
    ReactiveFormsModule
  ],
  providers: [
    TaskService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
