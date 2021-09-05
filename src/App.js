import { useState } from "react";
import './App.css';
import Form from './components/Form';
import List from './components/ListToDo';
// what I need 
// I need to render task
// I need textInput from input when I click on submit
// I need to push Todo component to todos array
// render todos in List component
// end
function App() {
	const [textInput, settextInput] = useState('')
	const [todos, settodos] = useState([])
	return (
		<div className="content_container">
			<h1>TODAY'S TASKS</h1>
			<Form settextInput={settextInput}/>
			<List todos={todos}/>
		</div>
		);
	}

export default App;
