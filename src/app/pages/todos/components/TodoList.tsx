import React from "react"
import PropTypes from "prop-types"
import { useRecoilValue } from "recoil"
import todosState from "app/atoms/todos"
import { Todo } from "domain/entities/todo"
import useController from "../controller"

interface TodoDetailComponent {
    title: string
    completed: boolean
    onComplete: React.MouseEventHandler<HTMLButtonElement>
    onDelete: React.MouseEventHandler<HTMLButtonElement>
    onUncomplete: React.MouseEventHandler<HTMLButtonElement>
}

function TodoDetail({ title, completed, onComplete, onDelete, onUncomplete }: TodoDetailComponent) {
    return (
        <li className={`flex border border-gray-200 rounded-lg p-4 mb-4 ${completed ? "bg-blue-100" : ""}`}>
            <div className="flex-1 text-lg text-gray-800">{title}</div>
            <div className="text-center items-center">
                {!completed ? (
                    <>
                        <button
                            className="text-green-500 border border-green-400 p-1 rounded-md mr-2"
                            onClick={onComplete}
                        >
                            Complete
                        </button>
                        <button className="text-red-500 border border-red-400 p-1 rounded-md mr-2" onClick={onDelete}>
                            Delete
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="bg-white text-gray-500 border border-gray-400 p-1 rounded-md mr-2"
                            onClick={onUncomplete}
                        >
                            Uncomplete
                        </button>
                    </>
                )}
            </div>
        </li>
    )
}

TodoDetail.propTypes = {
    name: PropTypes.string,
}

export default function TodoList() {
    const { completeTodo, deleteTodo, uncompleteTodo } = useController()
    const todos = useRecoilValue(todosState)

    function handleComplete(todo: Todo) {
        completeTodo(todo)
    }

    function handleDelete(todo: Todo) {
        deleteTodo(todo)
    }

    function handleUncomplete(todo: Todo) {
        uncompleteTodo(todo)
    }

    return (
        <ul>
            {todos.map((todo, i) => (
                <TodoDetail
                    key={i}
                    title={todo.title}
                    completed={todo.completed}
                    onComplete={() => handleComplete(todo)}
                    onDelete={() => handleDelete(todo)}
                    onUncomplete={() => handleUncomplete(todo)}
                />
            ))}
        </ul>
    )
}
