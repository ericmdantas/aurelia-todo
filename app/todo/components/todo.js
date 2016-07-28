import {Todo} from '../models/todo_model';
import {TodoService} from '../services/todo_service';
import {inject} from 'aurelia-framework';

@inject(Todo, TodoService)
export class TodoCmp {
    constructor(todo, service) {
        this.todo = todo;
        this.todoList = [];
        this.todoService = service;
    }

    add(todo) {
        this.todoService
            .add(todo)
            .then((t) => {
                this.todoList.push(t);
                this.todo = new Todo();  
            });
    }

    remove(id) {
        this.todoService
            .remove(id)
            .then(() => {
                this.todoList.forEach((t, index) => {
                    if (t._id === id) {
                        this.todoList.splice(index, 1);
                    }
                });
            });
    }
}