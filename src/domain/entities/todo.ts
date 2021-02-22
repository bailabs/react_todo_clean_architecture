export class Todo {
    id: number
    name: string
    completed: boolean
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
        this.completed = false
    }
}
