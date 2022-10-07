import { Fragment, useState } from "react"
import Todo from "./Todo"
import TodoForm from "./TodoForm"

function TodoList(props) {

    const [edit, setEdit] = useState({ id: null, text: "", isComplete: false })
    const [formState, setFormState] = useState(true)

    const editTodo = (value) => {
        props.updateTodo(edit.id, value)
        setEdit({ id: null, text: "", isComplete: false })
    }
    const formStateChanger = (state) => {
        setFormState(state)
    }

    if (props.list.length === 0) return <span className="adding-text">Nothing Here ;)</span>
    return (
        <div className="todolist">
            {
                props.list.map((item) => {
                    return <Fragment key={item.id}>
                        <Todo
                            info={item}
                            keys={item.id}
                            completeTodo={() => props.onCompleteTodo(item.id)}
                            onDelete={() => props.onDelete(item.id)}
                            onEdit={() => setEdit(item)}
                            formStateChange={formStateChanger}
                        />
                    </Fragment>
                })
            }
            {
                formState &&
                    edit.id ?
                    <TodoForm
                        isEditMode={true}
                        value={edit.text}
                        addOrEditTodo={editTodo}
                        setFromState={formStateChanger}
                    />
                    : ""
            }
        </div>
    )
}

export default TodoList