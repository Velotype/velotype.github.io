import { Component, type EmptyAttrs, RenderBasic, RenderObjectArray } from "@velotype/velotype"

type Todo = {
    text: string
}

class TodoList extends Component<EmptyAttrs> {
    // Each row is rendered by its own RenderObject, so a row can hold Components and RenderObjects,
    // and use TSX event handlers
    todos: RenderObjectArray<Todo> = new RenderObjectArray<Todo>({
        wrapperElementTag: "ul",
        renderFunction: (todo: Todo) => {
            const done = new RenderBasic<string>("")
            return <li>
                {todo.text}{done}
                <button type="button" onClick={() => done.value = " (done)"}>Done</button>
                <button type="button" onClick={() => this.todos.delete(todo)}>Remove</button>
            </li>
        },
    })
    textInput: HTMLInputElement = <input/>

    addTodo = () => {
        this.todos.push({text: this.textInput.value})
        this.textInput.value = ""
    }

    override render() {
        return <form onSubmit={this.addTodo} action="javascript:">
            <label>
                <span>Add Todo</span>
                {this.textInput}
            </label>
            <button type="submit">Add</button>
            {this.todos}
        </form>
    }
}
void TodoList
