const NavBar = (props) => {
    return (
        <div>
            {
                props.unCompleted ?
                    <h4>you have {props.unCompleted} tasks unfinished</h4>
                    : ""
            }
        </div>
    );
}

export default NavBar;