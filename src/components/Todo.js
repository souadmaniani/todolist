const Todo = () => {
    return (
        <li>
            <input type="checkbox" id='task'/>
            <label class="task-text" for='task'></label>
            <i class="fa fa-trash trash-icon" aria-hidden="true" id="trashIcon_id"></i>
        </li>
    )
}

export default Todo;