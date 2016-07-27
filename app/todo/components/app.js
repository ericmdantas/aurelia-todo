import {Todo} from '../models/todo_model';
import {TodoService} from '../services/todo_service';

export class App {
    constructor() {
        this.todo = new Todo();
        this.todoList = [];
        this.todoService = new TodoService();
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