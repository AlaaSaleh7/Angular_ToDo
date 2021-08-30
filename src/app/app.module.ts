import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './component/todos/todos.component';
import { HeaderComponent } from './component/header/header.component';
// import FormsModule to be able to use the ngModel directive
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
