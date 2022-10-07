import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Todo({ info, keys, completeTodo, onDelete, onEdit, formStateChange }) {
    return (
        <div className='todo-item' key={keys}>
            <input className="checkbox" type="checkbox" onClick={completeTodo} checked={info.isComplete ? true : false} />
            <div className={`todo-text ${info.isComplete ? "complete" : ""}`} onClick={completeTodo}>
                {info.text}
            </div>
            <div className="buttons-container">
                <a href='#editInp'>
                    <FontAwesomeIcon
                        icon={faPen}
                        className="action-icon edit-icon"
                        onClick={() => {
                            formStateChange(true)
                            onEdit()
                        }}
                    />
                </a>
                <div className='action-divider'></div>
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={onDelete}
                    className="action-icon trash-icon" />
            </div>
        </div>)
}

export default Todo