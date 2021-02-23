import { useRecoilCallback } from "recoil"
import { Todo } from "domain/entities/todo"

import { TodoRepositoryMemoryImpl } from "data/repositories/todoRepositoryMemoryImpl"
import { GetTodoUseCase } from "domain/usecases/getTodoUsecase"
import { AddTodoUseCase } from "domain/usecases/addTodoUsecase"
import { DeleteTodoUseCase } from "domain/usecases/deleteTodoUsecase"
import { CompleteTodoUseCase } from "domain/usecases/completeTodoUsecase"
import { UncompleteTodoUseCase } from "domain/usecases/uncompleteTodoUsecase"

import todosState from "app/atoms/todos"

export default function useController() {
    const refreshState = useRecoilCallback(({ set }) => async () => {
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

    async function completeTodo(todo: Todo) {
        const executor = new CompleteTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
        const completedTodo = await executor.execute(todo)
        refreshState()
        return completedTodo
    }

    async function uncompleteTodo(todo: Todo) {
        const executor = new UncompleteTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
        const uncompletedTodo = await executor.execute(todo)
        refreshState()
        return uncompletedTodo
    }

    return { refreshState, addTodo, getTodo, deleteTodo, completeTodo, uncompleteTodo }
}
