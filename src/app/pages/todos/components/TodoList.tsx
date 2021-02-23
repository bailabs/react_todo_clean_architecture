import React from "react"
import PropTypes from "prop-types"
import { useRecoilValue } from "recoil"
import todosState from "app/atoms/todos"
import { Todo } from "domain/entities/todo"
import useController from "../controller"

function TodoDetail({ name, onClick }: { name: string; onClick: React.MouseEventHandler<HTMLLIElement> }) {
    return (
        <li
            className="border border-gray-200 rounded-lg p-4 mb-4 cursor-pointer hover:text-blue-600 hover:bg-blue-100 hover:border-transparent: hover:shadow-lg"
            onClick={onClick}
        >
            {name}
        </li>
    )
}

export default function TodoList() {
    const { deleteTodo } = useController()
    const todos = useRecoilValue(todosState)
    function handleClick(todo: Todo) {
        deleteTodo(todo)
    }
    return (
        <ul>
            {todos.map((todo, i) => (
                <TodoDetail key={i} name={todo.name} onClick={() => handleClick(todo)} />
            ))}
        </ul>
    )
}

TodoDetail.propTypes = {
    name: PropTypes.string,
}
