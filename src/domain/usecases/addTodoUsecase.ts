import { TodoRepository } from "../repositories/todoRepository"
import { Todo } from "../entities/todo"

export class AddTodoUseCase {
    todoRepo: TodoRepository
    constructor(todoRepo: TodoRepository) {
        this.todoRepo = todoRepo
    }
    addData(todo: Todo): Promise<any> {
        return this.todoRepo.addData(todo)
    }

    deleteData(todo: Todo): Promise<Todo> {
        if (todo.completed) {
            throw "Completed entry cannot be deleted"
        }
        return this.todoRepo.deleteData(todo)
    }
}
