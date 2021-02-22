import { TodoRepository } from "../repositories/todoRepository"
import { Todo } from "../entities/todo"

export class GetTodoUsecase {
    todoRepo: TodoRepository
    constructor(todoRepo: TodoRepository) {
        this.todoRepo = todoRepo
    }
    execute(): Promise<Todo[]> {
        return this.todoRepo.getData()
    }
}
