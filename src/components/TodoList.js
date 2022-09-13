import { Fragment } from "react"
import Todo from "./Todo"

function TodoList(props) {

    if (props.list.length === 0) return <span className="adding-text">Add Your Todo List!!</span>
    return (
        <div>
            {
                props.list.map((item) => {
                    return <Fragment key={item.id}>
                        <Todo
                            info={item}
                            keys={item.id}
                            completeTodo={() => props.onCompleteTodo(item.id)}
                            onDelete={() => props.onDelete(item.id)}
                        />
                    </Fragment>

                })
            }
        </div>
    )
}

export default TodoList