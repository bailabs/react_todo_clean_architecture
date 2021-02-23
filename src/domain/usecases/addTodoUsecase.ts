import { TodoRepository } from "../repositories/todoRepository"
import { Todo } from "../entities/todo"

export class AddTodoUseCase {
    todoRepo: TodoRepository
    constructor(todoRepo: TodoRepository) {
        this.todoRepo = todoRepo
    }
    execute(todo: Todo): Promise<any> {
        return this.todoRepo.addData(todo)
    }
}
