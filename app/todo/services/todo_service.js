export class TodoService {
    add(todo) {
        return new Promise((res) => {
            return res(todo);
        });
    }

    remove(id) {
        return new Promise((res) => {
            return res(id);
        });
    }
}
