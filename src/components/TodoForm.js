import { useState } from 'react'

function TodoForm(props) {
    const [inputVal, setInputVal] = useState("");
    const [err, setErr] = useState("")

    const inputChangeHandler = (e) => {
        setErr("")
        setInputVal(e.target.value)
    }

    const submitTodo = (e) => {
        e.preventDefault();
        if(!inputVal) {
            setErr("input must not be empty")
            return
        }
        props.addTodo(inputVal)
        setInputVal("")
    }
    return (
        <form onSubmit={submitTodo} className="todo-form">
            <p className='err'>{err}</p>
            <input type="text" onChange={inputChangeHandler} value={inputVal} placeholder={"Enter Todo"}/>
            <button type='submit'>Add</button>
        </form>
    )
}

export default TodoForm