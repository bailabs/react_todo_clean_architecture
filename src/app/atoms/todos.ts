import { Todo } from "../../domain/entities/todo"
import { atom } from "recoil"

const todosState = atom({
    key: "todosState",
    default: [] as Todo[],
})

export default todosState
