import { atom } from "recoil"

const todosState = atom({
    key: "todosState",
    default: [] as any[],
})

export default todosState
