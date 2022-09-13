import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

function TodoApp() {
    const [todos, setTodos] = useState([])

    const todoChangeHandler = (update) => {
        let newData = {
            id: todos.length + 1,
            text: update,
            isComplete: false
        }
        setTodos([
            ...todos,
            newData
        ])
    }
    return (
        <div className="container">
            <h2>TodoList</h2>
            <TodoForm addTodo={todoChangeHandler} />
            <TodoList list={todos} />
        </div>
    )
}

export default TodoApp