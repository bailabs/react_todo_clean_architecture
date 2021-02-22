import React, { useState } from "react"
import { useSetRecoilState } from "recoil"
import todosState from "app/atoms/todos"
import errorState from "app/atoms/error"

export default function TodoInput() {
    const [todo, setTodo] = useState("")
    const setTodos = useSetRecoilState(todosState)
    const setError = useSetRecoilState(errorState)

    function handleChange(event: any) {
        setTodo(event.target.value)
    }

    function handleAdd() {
        if (!todo) {
            setError("Please input a value.")
        } else {
            setTodos((data) => [...data, todo])
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
