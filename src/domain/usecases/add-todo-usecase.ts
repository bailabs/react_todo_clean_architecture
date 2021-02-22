import { TodoRepository } from "../repositories/todo-repository"
import { Todo } from "../entities/todo"

export class AddTodoUsecase {
    todoRepo: TodoRepository
    constructor(todoRepo: TodoRepository) {
        this.todoRepo = todoRepo
    }
    addData(todo: Todo): Promise<any> {
        return this.todoRepo.addData(todo)
    }
}
