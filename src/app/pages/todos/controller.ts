import { useRecoilCallback } from "recoil"
import { Todo } from "domain/entities/todo"

import { TodoRepositoryMemoryImpl } from "data/repositories/todoRepositoryMemoryImpl"
import { GetTodoUseCase } from "domain/usecases/getTodoUsecase"
import { AddTodoUseCase } from "domain/usecases/addTodoUsecase"
import { DeleteTodoUseCase } from "domain/usecases/deleteTodoUsecase"

import todosState from "app/atoms/todos"

export default function useController() {
    const refreshState = useRecoilCallback(({ set }) => async () => {
        console.log("recoaherao")
        const todos = await getTodo()
        set(todosState, todos)
    })

    async function addTodo(name: string) {
        const executor = new AddTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
        const newTodo = await executor.execute(name)
        refreshState()
        return newTodo
    }

    function getTodo() {
        const executor = new GetTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
        return executor.execute()
    }

    async function deleteTodo(todo: Todo) {
        const executor = new DeleteTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
        const deletedTodo = await executor.execute(todo)
        refreshState()
        return deletedTodo
    }

    return { refreshState, addTodo, getTodo, deleteTodo }
}
