// import _uniqueId from 'lodash/uniqueId';
import axios from 'axios';

const Todo = ({ id, content, showTodos }) => {

    const deleteTask = async () => {
        try {
            await axios.delete(`http://localhost:4000/api/v1/todos/${id}`)
            showTodos()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <li className="task">
            <input type="checkbox" id={id} />
            <label className="task-text" htmlFor={id} >{content}</label>
            <i className="fa fa-trash trash-icon" aria-hidden="true"
                id="trashIcon_id" onClick={deleteTask} >
            </i>
        </li>
    )
}

export default Todo;