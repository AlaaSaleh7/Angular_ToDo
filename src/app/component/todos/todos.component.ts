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
    this.todos = [
      {
        // id: 1,
        text: 'Study',
        // day: 'sunday 8:00 pm',
        completed: true,
      },
      {
        // id: 2,
        text: 'Codding',
        // day: 'monday 1:30 pm',
        completed: true,
      },
      {
        // id: 3,
        text: 'Eat',
        // day: '',
        completed: false,
      },
    ];
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((ele, i) => i !== id);
  }
}
