import { useEffect } from "react"
import { useRecoilCallback } from "recoil"
import { TodoRepositoryMemoryImpl } from "data/repositories/todoRepositoryMemoryImpl"
import { Todo } from "domain/entities/todo"
import { GetTodoUsecase } from "domain/usecases/getTodoUsecase"
import todos from "../atoms/todos"

export default function TodosLoader() {
    const initData = useRecoilCallback(({ set }) => (data: Todo[]) => {
        set(todos, data)
    })
    useEffect(() => {
        const todoRepo = new TodoRepositoryMemoryImpl()
        const getTodo = new GetTodoUsecase(todoRepo)
        getTodo.execute().then((data) => initData(data))
    }, [])
    return null
}
