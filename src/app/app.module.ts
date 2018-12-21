import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DyrektywyComponent } from './dyrektywy/dyrektywy.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
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
    FormsModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
