import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoTaskComponent } from './lista/to-do-task/to-do-task.component';
import { DoneTaskComponent } from './lista/done-task/done-task.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'todoTask', pathMatch: 'full'},
    {path: 'todoTask', component: ToDoTaskComponent},
    {path: 'doneTask', component: DoneTaskComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModel {

}
