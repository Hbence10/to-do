import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveToDoComponent } from './active-to-do/active-to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CompletedToDoComponent } from './completed-to-do/completed-to-do.component';

const routes: Routes = [
  {path: "active-to-do", component:ActiveToDoComponent},
  {path: "", component:ToDoListComponent},
  {path: "to-do-list", component: ToDoListComponent},
  {path: "completed-to-do", component: CompletedToDoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
