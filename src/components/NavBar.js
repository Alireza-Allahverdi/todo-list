import Select from 'react-select';

const NavBar = ({ unCompleted, selectHanlder, state }) => {

    const options = [
        { value: 'All', label: 'All' },
        { value: 'Completed', label: 'Completed' },
        { value: 'UnCompleted', label: 'UnCompleted' },
    ];
    return (
        <div>
            {
                unCompleted ?
                    <>
                        <h4>you have {unCompleted} unfinished tasks</h4>
                        <Select
                            value={state}
                            options={options}
                            onChange={selectHanlder}
                        />

                        {/*  
                        WITH SELECT
                       <select value={state} onChange={selectHanlder}>
                            <option value="All">All</option>
                            <option value="Completed">Completed</option>
                            <option value="UnCompleted">UnCompleted</option>
                        </select>
                        */}
                    </>
                    : ""
            }
        </div>
    );
}

export default NavBar;