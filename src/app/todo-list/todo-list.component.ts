import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  newTodo: string = '';
  todos: string[] = [];

  addTodo() {
    this.todos.push(this.newTodo);
    this.newTodo = '';
  }
}
