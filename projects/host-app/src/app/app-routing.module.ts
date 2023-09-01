import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'todo-list',
    loadChildren: () => import("mfe-app/TodoListModule").then(m=> m.TodoListModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import("mfe1-app/DashboardModule").then(m=> m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }