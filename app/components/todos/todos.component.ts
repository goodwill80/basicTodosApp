import { Component } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';


class Todo {
  text: string;
  isCompleted: boolean;
  completedTasks: number;

  constructor(text: string, isCompleted: boolean, completedTasks?: number){
    this.text = text;
    this.isCompleted;
    this.completedTasks = completedTasks || 0;
  }



}



@Component({
  moduleId: module.id,
  selector: 'todos',
  styleUrls: ['todos.component.css'],
  templateUrl: 'todos.component.html',
  // directives:[ ROUTER_DIRECTIVES ]
})


export class TodosComponent {
  todos: Todo[];
  constructor(){
    this.todos = [];
  }

  addTodo($event, newtodo: HTMLInputElement) {
    console.log('Adding todo: ${newtodo.value}');
    var newTask = newtodo.value;
    this.todos.push(new Todo(newTask));
    newtodo.value = "";
  }

  updateStatus(todo){
    var completed = {
      text: todo.text,
      isCompleted: !todo.isCompleted
    }
      todo = completed;
  }

  removeTodo(todo) : void {
     var index = this.todos.indexOf(todo, 0);
     if (index !== undefined) {
       this.todos.splice(index, 1);
     }
  }




};
