import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Todo({ info, keys, completeTodo, onDelete, onEdit }) {
    return (
        <div className='todo-item' key={keys}>
            <input className="checkbox" type="checkbox" onClick={completeTodo} />
            <div className={`todo-text ${info.isComplete ? "complete" : ""}`}>
                {info.text}
            </div>
            <div className="buttons-container">
                <a href='#editInp'>
                    <FontAwesomeIcon icon={faPen} onClick={onEdit} className="action-icon" />
                </a>
                <div className='action-divider'></div>
                <FontAwesomeIcon icon={faTrash} onClick={onDelete} className="action-icon" />
            </div>
        </div>)
}

export default Todo