import { Component, OnInit, Input } from '@angular/core';
import { Todo, Todos } from './../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = Todos;
  constructor() {}
// Lifecycle Angular
  ngOnInit(): void {
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((ele, i) => i !== id);
  }
}
