import { TodoRepository } from "../../domain/repositories/todoRepository"
import { Todo } from "../../domain/entities/todo"

export class TodoRepositoryMemoryImpl implements TodoRepository {
    private static instance: TodoRepositoryMemoryImpl
    private lastId = 0
    private todoList: Todo[] = []

    private constructor() {
        this.addData(new Todo(-1, "From Memory"))
    }

    public static getInstance(): TodoRepositoryMemoryImpl {
        if (!TodoRepositoryMemoryImpl.instance) {
            TodoRepositoryMemoryImpl.instance = new TodoRepositoryMemoryImpl()
        }
        return TodoRepositoryMemoryImpl.instance
    }

    addData(todo: Todo): Promise<Todo> {
        todo.id = this.lastId
        this.todoList = [...this.todoList, todo]
        this.lastId = this.lastId + 1
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
        const todos = this.todoList.filter((currentTodo) => currentTodo.id !== todo.id)
        this.todoList = todos
        return Promise.resolve(todo)
    }
}
