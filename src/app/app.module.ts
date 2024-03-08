import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddItemComponent } from './MyComponents/add-item/add-item.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { TodoDetailsComponent } from './MyComponents/todo-details/todo-details.component';
import { SignUpComponent } from './MyComponents/sign-up/sign-up.component';
import { SignInComponent } from './MyComponents/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    AddItemComponent,
    HomeComponent,
    TodoDetailsComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
