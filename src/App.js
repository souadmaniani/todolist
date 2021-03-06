import { useState } from "react";
import './App.css';
import Form from './components/Form';
import List from './components/ListToDo';

function App() {
	const [textInput, settextInput] = useState('')
	const [todos, settodos] = useState([])
	
	return (
		<div className="content_container">
			<h1>TODAY'S TASKS</h1>
			<Form settextInput={settextInput} textInput={textInput} settodos={settodos} todos={todos}  />
			<List todos={todos} settodos={settodos} />
		</div>
		);
	} 

export default App;
