import { Component } from '@angular/core';


class Todo {
  text: string;
  isCompleted: boolean;

  constructor(text: string, isCompleted: boolean){
    this.text = text;
    this.isCompleted = isCompleted;
  }


}



@Component({
  moduleId: module.id,
  selector: 'todos',
  styleUrls: ['todos.component.css'],
  templateUrl: 'todos.component.html',
})


export class TodosComponent {
  todos: Todo[];
  constructor(){
    this.todos = [];
  }

  addTodo(newtodo: HTMLInputElement, isCompleted) {

    var newTask = newtodo.value;
    this.todos.push(new Todo(newTask));
    newtodo.value = "";
  
  }


  removeTodo(todo) : void {
     var index = this.todos.indexOf(todo, 0);
     if (index !== undefined) {
       this.todos.splice(index, 1);
     }
  }

  get remaining() {
      return this.todos.reduce((count: number, todo: Todo) => count + +!todo.isCompleted, 0);
    }

    archive(): void {
      var oldTodos = this.todos;
      this.todos = [];
      oldTodos.forEach((todo: Todo) => {
        if (!todo.isCompleted) this.todos.push(todo);
      });
    }



};
