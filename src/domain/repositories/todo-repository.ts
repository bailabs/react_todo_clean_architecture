import { Todo } from "../entities/todo"

export interface TodoRepository {
    addData(todo: Todo): Promise<any>
    getData(): Promise<Todo[]>
}
