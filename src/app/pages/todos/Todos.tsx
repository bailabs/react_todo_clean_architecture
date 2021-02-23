import React, { useEffect } from "react"
import { useRecoilValue } from "recoil"
import todosState from "app/atoms/todos"
import errorState from "app/atoms/error"

import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

import useController from "./controller"

export default function Todos() {
    // init data
    const { refreshState } = useController()
    useEffect(() => {
        refreshState()
    }, [])

    // state
    const todos = useRecoilValue(todosState)
    const error = useRecoilValue(errorState)

    return (
        <div className="max-w-screen-lg mx-auto pt-16">
            <header className="mb-6">
                <h1 className="text-6xl font-extrabold text-gray-900 mb-8">Things to do</h1>
                <p className="text-2xl text-gray-500">There are {todos.length} todos</p>
            </header>
            <TodoList />
            <TodoInput />
            <div className="mt-2 text-red-400">{error}</div>
        </div>
    )
}
