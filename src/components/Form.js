import axios from 'axios'

const Form = ({settextInput, textInput, settodos, todos}) => {

    const changeTextInput = (e)=> {
        settextInput(e.target.value);
    }
    
    const Submit = async ()=> {
        if (textInput)
        {
            try {
                const res = await axios.post('http://localhost:4000/api/v1/todos', {todo: textInput})
                settodos(oldTodos => [...oldTodos, res.data])
                settextInput('')
            } catch (error) {
                console.log(error)
            }
        } 
    }

    return (
        <form className="container_input" action="/" method="POST">
            <input type="text" placeholder="Ex: meeting with souad"
                id="input_id" onChange={changeTextInput} value={textInput} />
            <div className="submit_btn" id="add_todo" onClick = {Submit}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                    </path>
                </svg>
            </div>
        </form>
    )
}
export default Form