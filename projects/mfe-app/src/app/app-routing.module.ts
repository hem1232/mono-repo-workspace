import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from 'projects/host-app/src/app/home/home.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:'todo-mfe',
    pathMatch:'full'
  },
  {
    path:'todo-mfe',
    component: TodoListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
