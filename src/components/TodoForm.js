import { useState } from 'react'

function TodoForm(props) {
    const [inputVal, setInputVal] = useState(props.isEditMode ? props.value : "");
    const [err, setErr] = useState("")

    const inputChangeHandler = (e) => {
        setErr("")
        setInputVal(e.target.value)
    }

    const submitTodo = (e) => {
        e.preventDefault();
        if (!props.isEditMode) {
            if (!inputVal) {
                setErr("input must not be empty")
                return
            }
        }
        props.addOrEditTodo(inputVal)
        setInputVal("")
    }
    return (
        <form onSubmit={submitTodo} className="todo-form">
            {
                props.isEditMode ?
                    <>
                        <p className='err'>{err}</p>
                        <input
                            type="text"
                            onChange={inputChangeHandler}
                            value={inputVal}
                            placeholder={"Enter New Todo"} />
                        <button type='submit'>
                            Edit
                        </button>

                    </>
                    :
                    <>
                        <p className='err'>{err}</p>
                        <input
                            type="text"
                            onChange={inputChangeHandler}
                            value={inputVal}
                            placeholder={"Enter Todo"} />
                        <button type='submit'>
                            Add
                        </button>

                    </>
            }
        </form>
    )
}

export default TodoForm