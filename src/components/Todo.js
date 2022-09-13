
function Todo({info, keys, completeTodo}) {
    return (
        <div className='todo-item' key={info.id}>
            <div>{keys+1}</div>
            <div className={`todo-text ${info.isComplete ? "complete" : ""}`}>
                {info.text}
            </div>
            <div className="buttons-container">
                <button>Edit</button>
                <button onClick={completeTodo}>
                    {
                        !info.isComplete ?
                        <>Mark As Complete</>
                        :
                        <>Mark As Not Complete</>
                    }
                </button>
            </div>
        </div>)
}

export default Todo