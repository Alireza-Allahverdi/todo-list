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

    const onCompleteTodo = (id) => {
        //? we must first find the index we are looking for to change
        let selectedIndex = todos.findIndex((todo) => todo.id === id)

        //* then we will change the 
        let selectedTodo = {...todos[selectedIndex]}
        selectedTodo.isComplete = !selectedTodo.isComplete

        let updateTodo = [...todos]
        updateTodo[selectedIndex] = selectedTodo

        setTodos(updateTodo)
    }

    return (
        <div className="container">
            <h2>TodoList</h2>
            <TodoForm addTodo={todoChangeHandler} />
            <hr />
            <TodoList list={todos} onCompleteTodo={onCompleteTodo}/>
        </div>
    )
}

export default TodoApp