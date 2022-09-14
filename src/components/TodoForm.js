import { useEffect, useRef, useState } from 'react'

function TodoForm(props) {
    const [inputVal, setInputVal] = useState(props.isEditMode ? props.value : "");
    const [err, setErr] = useState("")

    const inputRef = useRef(null)

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

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <form onSubmit={submitTodo} className="todo-form">
            {
                props.isEditMode ?
                    <>
                        <hr />
                        <p className='err'>{err}</p>
                        <input
                            id="editInp"
                            className='update-inp'
                            type="text"
                            onChange={inputChangeHandler}
                            value={inputVal}
                            placeholder={"Enter New Todo"}
                            ref={inputRef}
                        />
                        <button className='update-btn' type='submit'>Update</button>
                        <button className='update-btn' type='button'>Cancel</button>
                    </>
                    :
                    <>
                        <p className='err'>{err}</p>
                        <input
                            type="text"
                            onChange={inputChangeHandler}
                            value={inputVal}
                            placeholder={"Enter Todo"}
                            ref={inputRef}
                        />
                        <button type='submit'>Add</button>
                    </>
            }
        </form>
    )
}

export default TodoForm