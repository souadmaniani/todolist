import { useEffect } from 'react';
import axios from 'axios'
import Todo from "./Todo";

const List = ({todos, settodos}) => {

    const showTodos = async ()=> {
        try {
            const {data} = await axios.get('http://localhost:4000/api/v1/todos')
            settodos(data.data)
            console.log('t7aaarch');
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        showTodos()
    }, [])

    return (
        <ul id="myList">
            {todos.map((task )=> (
                <Todo content={task.todo} key={task._id} id={task._id} showTodos={showTodos} />
            ))}
        </ul>
    )
}
export default List;