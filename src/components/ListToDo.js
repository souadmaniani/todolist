import Todo from "./Todo";
const List = ({todos, settodos}) => {
    let i = 0
    return (
        <ul id="myList">
            
            {todos.map(task => (
                <Todo content={task} key={i++} settodos={settodos} />
            ))}
        </ul>
    )
}
export default List;