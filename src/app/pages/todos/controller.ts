import { useEffect } from "react"
import { useRecoilCallback } from "recoil"
import { Todo } from "domain/entities/todo"

import { TodoRepositoryMemoryImpl } from "data/repositories/todoRepositoryMemoryImpl"
import { GetTodoUseCase } from "domain/usecases/getTodoUsecase"
import { AddTodoUseCase } from "domain/usecases/addTodoUsecase"
import { DeleteTodoUseCase } from "domain/usecases/deleteTodoUsecase"

import todosState from "app/atoms/todos"

export function addTodo(todo: Todo) {
    const executor = new AddTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
    return executor.execute(todo)
}

export async function getTodos() {
    const getData = useRecoilCallback(({ set }) => async () => {
        const executor = new GetTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
        const todos = await executor.execute()
        set(todosState, todos)
    })
    useEffect(() => {
        getData()
    }, [])
    return null
}

export function deleteTodo(todo: Todo) {
    const executor = new DeleteTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
    return executor.execute(todo)
}
