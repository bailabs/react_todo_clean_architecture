import { TodoRepository } from "../../domain/repositories/todo-repository"
import { Todo } from "../../domain/entities/todo"

export class TodoRepositoryMemoryImpl implements TodoRepository {
    private static instance: TodoRepositoryMemoryImpl
    private todoList: Todo[] = []

    public static getInstance(): TodoRepositoryMemoryImpl {
        if (!TodoRepositoryMemoryImpl.instance) {
            TodoRepositoryMemoryImpl.instance = new TodoRepositoryMemoryImpl()
        }
        return TodoRepositoryMemoryImpl.instance
    }

    addData(todo: Todo): Promise<Todo> {
        this.todoList.push(todo)
        return Promise.resolve(todo)
    }

    getData(): Promise<Todo[]> {
        return Promise.resolve(this.todoList as Todo[])
    }

    updateData(todo: Todo): Promise<Todo> {
        const index = this.todoList.findIndex((findElement) => findElement.id === todo.id)
        this.todoList[index].name = todo.name
        this.todoList[index].completed = todo.completed
        return Promise.resolve(todo)
    }

    deleteData(todo: Todo): Promise<Todo> {
        const index = this.todoList.findIndex((findElement) => findElement.id === todo.id)
        this.todoList.splice(index, 1)
        return Promise.resolve(todo)
    }
}
