function Todo({ info, keys, completeTodo, onDelete }) {
    return (
        <div className='todo-item' key={keys}>
            <input className="checkbox" type="checkbox" onClick={completeTodo} />
            <div className={`todo-text ${info.isComplete ? "complete" : ""}`}>
                {info.text}
            </div>
            <div className="buttons-container">
                <button>Edit</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>)
}

export default Todo