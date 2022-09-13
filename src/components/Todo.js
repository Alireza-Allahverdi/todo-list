
function Todo({info, keys, completeTodo}) {
    return (
        <div className='todo-item' key={info.id}>
            <div>{keys+1}</div>
            <div className="todo-text">
                {info.text}
            </div>
            <div className="buttons-container">
                <button>Edit</button>
                <button onClick={completeTodo}>Mark As Complete</button>
            </div>
        </div>)
}

export default Todo