const NavBar = ({unCompleted , selectHanlder, state}) => {

    return (
        <div>
            {
                unCompleted ?
                    <>
                        <h4>you have {unCompleted} unfinished tasks</h4>
                        <select value={state} onChange={selectHanlder}>
                            <option value="All">All</option>
                            <option value="Completed">Completed</option>
                            <option value="UnCompleted">UnCompleted</option>
                        </select>
                    </>
                    : ""
            }
        </div>
    );
}

export default NavBar;