import React, { useState } from "react"
import { useSetRecoilState } from "recoil"
import errorState from "app/atoms/error"
import { Todo } from "domain/entities/todo"
import useController from "app/pages/todos/controller"

export default function TodoInput() {
    const { addTodo } = useController()

    const [todo, setTodo] = useState("")
    const setError = useSetRecoilState(errorState)

    function handleChange(event: any) {
        setTodo(event.target.value)
    }

    function handleAdd() {
        if (!todo) {
            setError("Please input a value.")
        } else {
            addTodo(todo)
            setTodo("")
            setError("")
        }
    }

    return (
        <div>
            <input
                className="border border-gray-200 py-2 pl-4 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="New Todo (e.g. Homework)"
                type="text"
                name="todo"
                value={todo}
                onChange={handleChange}
            />
            <button
                className="ml-2 px-4 py-2 bg-blue-100 rounded-lg text-blue-600 hover:bg-blue-200 hover:text-blue-800"
                onClick={handleAdd}
            >
                Add
            </button>
        </div>
    )
}
