import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListSignalsComponent } from './todo-list-signals/todo-list-signals.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'todo-list', component: TodoListSignalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
