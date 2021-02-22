import { TodoRepository } from "../../domain/repositories/todo-repository"
import { Todo } from "../../domain/entities/todo"

export class TodoRepositoryImpl implements TodoRepository {
    private static instance: TodoRepositoryImpl

    public static getInstance(): TodoRepositoryImpl {
        if (!TodoRepositoryImpl.instance) {
            TodoRepositoryImpl.instance = new TodoRepositoryImpl()
        }
        return TodoRepositoryImpl.instance
    }

    addData(todo: Todo): Promise<any> {
        return Promise.resolve()
    }

    getData(): Promise<Todo[]> {
        return Promise.resolve([] as Todo[])
    }
}
