"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import { ROUTER_DIRECTIVES } from '@angular/router';
var Todo = (function () {
    function Todo(text, isCompleted, completedTasks) {
        this.text = text;
        this.isCompleted;
        this.completedTasks = completedTasks || 0;
    }
    return Todo;
}());
var TodosComponent = (function () {
    function TodosComponent() {
        this.todos = [];
    }
    TodosComponent.prototype.addTodo = function ($event, newtodo) {
        console.log('Adding todo: ${newtodo.value}');
        var newTask = newtodo.value;
        this.todos.push(new Todo(newTask));
        newtodo.value = "";
    };
    TodosComponent.prototype.updateStatus = function (todo) {
        var completed = {
            text: todo.text,
            isCompleted: !todo.isCompleted
        };
        todo = completed;
    };
    TodosComponent.prototype.removeTodo = function (todo) {
        var index = this.todos.indexOf(todo, 0);
        if (index !== undefined) {
            this.todos.splice(index, 1);
        }
    };
    TodosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todos',
            styleUrls: ['todos.component.css'],
            templateUrl: 'todos.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
;
//# sourceMappingURL=todos.component.js.map