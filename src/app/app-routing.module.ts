import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './MyComponents/add-item/add-item.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { TodoDetailsComponent } from './MyComponents/todo-details/todo-details.component';
import { SignUpComponent } from './MyComponents/sign-up/sign-up.component';
import { AuthGuard } from './auth-guard.guard';
import { SignInComponent } from './MyComponents/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: SignInComponent },
  { path: 'create-todo', component: AddItemComponent, canActivate: [AuthGuard] },
  { path: 'create-todo/:id', component: AddItemComponent, canActivate: [AuthGuard] },
  { path: 'todo', component: TodoItemComponent },
  { path: 'todo-details/:id', component: TodoDetailsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
