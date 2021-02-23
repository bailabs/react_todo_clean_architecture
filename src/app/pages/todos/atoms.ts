import { atom } from "recoil"
import { Todo } from "domain/entities/todo"

export const todosState = atom({
    key: "todosState",
    default: [] as Todo[],
})

export const errorState = atom({
    key: "errorState",
    default: "",
})
