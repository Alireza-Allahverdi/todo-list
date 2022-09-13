function TodoList(props) {
    return (
        <div>
            {
                props.list.map((item, index) => {
                    <div className='todo-item'>
                        <span>{index}</span>
                        <span>{item}</span>
                    </div>
                })
            }
        </div>
    )
}

export default TodoList