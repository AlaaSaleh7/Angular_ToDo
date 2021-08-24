import { Component, OnInit } from '@angular/core';
import { Todo, Todos } from './../../Todo';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todos:Todo[] = Todos;
  title : string = "ToDo List";
  // inputTodo :string="";
  constructor() { }

  ngOnInit(): void {
  }
  // addTodo(){
  // this.todos.push({
  //   text : this.inputTodo,
  //   completed: false
  // })
  // }
}
