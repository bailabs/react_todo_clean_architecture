import React from "react"
import PropTypes from "prop-types"
import { useRecoilState } from "recoil"
import todosState from "app/atoms/todos"

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
    const [todos, setTodos] = useRecoilState(todosState)
    function handleClick(id: number) {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }
    return (
        <ul>
            {todos.map((todo, i) => (
                <TodoDetail key={i} name={todo.name} onClick={() => handleClick(todo.id)} />
            ))}
        </ul>
    )
}

TodoDetail.propTypes = {
    name: PropTypes.string,
}
