import React from "react"
import PropTypes from "prop-types"
import { useRecoilValue } from "recoil"
import todosState from "app/atoms/todos"

function TodoDetail({ name }: { name: string }) {
    return <li className="border border-gray-200 rounded-lg p-4 mb-4">{name}</li>
}

export default function TodoList() {
    const todos = useRecoilValue(todosState)
    return (
        <ul>
            {todos.map((todo, i) => (
                <TodoDetail key={i} name={todo} />
            ))}
        </ul>
    )
}

TodoDetail.propTypes = {
    name: PropTypes.string,
}
