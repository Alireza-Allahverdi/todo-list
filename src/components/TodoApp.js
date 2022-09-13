import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

function TodoApp() {
    const [todos, setTodos] = useState([])

    const todoUpdateHandler = (update) => {
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
        //! these steps are importantّ

        //? we must first find the index we are looking for to change
        let selectedIndex = todos.findIndex((todo) => todo.id === id)

        //* then we will clone the wanted object form the original to not to mutate the whole thing
        //* then we will change what ever we want to change from it
        let selectedTodo = { ...todos[selectedIndex] }
        selectedTodo.isComplete = !selectedTodo.isComplete

        //? then we will clone the whole thing again because we don't want to mutate it
        //? and then change the index found with the wanted object
        let updateTodo = [...todos]
        updateTodo[selectedIndex] = selectedTodo

        //* at last we set our list with the new value
        setTodos(updateTodo)
    }

    const deleteHanlder = (id) => {
        //! we can use the id directly aswell but not in any project
        //! here if we wanna use id we must decrease it by 1

        // WITH FILTER
        /*         let filterItmes = todos.filter((item) => item.id !== id)
                setTodos(filterItmes)
         */
        //? this is the best way to handle any app
        let selectedIndex = todos.findIndex((item) => item.id === id)

        let updateTodo = [...todos]
        updateTodo.splice(selectedIndex, 1)

        setTodos(updateTodo)
    }

    return (
        <div className="container">
            <div className="linethrought" />
            <h2 className="title">TodoList</h2>
            <TodoForm addTodo={todoUpdateHandler} />
            <hr />
            <TodoList
                list={todos}
                onCompleteTodo={onCompleteTodo}
                onDelete={deleteHanlder}
            />
        </div>
    )
}

export default TodoApp