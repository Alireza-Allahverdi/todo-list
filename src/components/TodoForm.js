import { useEffect, useRef, useState } from 'react'

function TodoForm(props) {
    const [inputVal, setInputVal] = useState(props.isEditMode ? props.value : "");
    const [err, setErr] = useState("")
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)

    const inputChangeHandler = (e) => {
        setErr("")
        setInputVal(e.target.value)
    }

    const submitTodo = (e) => {
        e.preventDefault();
        if (!inputVal) {
            setErr("input must not be empty")
            return
        }
        props.addOrEditTodo(inputVal)
        setInputVal("")
    }

    useEffect(() => {
        if (props.isEditMode) {
            inputRef2.current.focus()
        }
        else { inputRef.current.focus() }

    }, [])

    useEffect(() => {
        setInputVal(props.value)
    }, [props.value])

    return (
        <form onSubmit={submitTodo} className="todo-form">
            {
                props.isEditMode && <hr />
            }

            <p className='err'>{err}</p>
            <input
                id={props.isEditMode ? "editInp" : ""}
                className='update-inp'
                type="text"
                onChange={inputChangeHandler}
                value={inputVal}
                placeholder={props.isEditMode ? "Enter New Todo" : "Enter Todo"}
                ref={props.isEditMode ? inputRef2 : inputRef}
            />
            <button
                className={props.isEditMode ? 'update-btn' : ""}
                type='submit'
            >
                {
                    props.isEditMode ?
                        <>Update</>
                        :
                        <>Add</>
                }
            </button>
            {
                props.isEditMode &&
                <button 
                className='update-btn' 
                type='button'
                onClick={()=> {props.setFromState(false)}}
                >Cancel</button>

            }
        </form>
    )
}

export default TodoForm