import { useState } from 'react'
import _uniqueId from 'lodash/uniqueId';

const Todo = ({content, settodos}) => {
    
    const [id] = useState(_uniqueId('prefix-'));
    // const deleteTask = ()=>{
    //     settodos((oldTodos)=> )
    // }

    return (
        <li className="task">
            <input type="checkbox" id={id} />
            <label className="task-text" htmlFor={id} >{content}</label>
            <i className="fa fa-trash trash-icon" aria-hidden="true"
                id="trashIcon_id" onClick={deleteTask} ></i>
        </li>
    )
}

export default Todo;