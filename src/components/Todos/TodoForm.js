import { useContext, useState } from 'react'
import { TodoContext } from '../../context'
import Button from '../UI/Button'

import styles from './TodoForm.module.css'

function TodoForm() {
	const { addTodoHandler } = useContext(TodoContext)
	const [text, setText] = useState('')

	const onSubmitHandler = (e) => {
		e.preventDefault()
		addTodoHandler(text)
		setText('')
	}

	return (
		<div className={styles.todoFormContainer}>
			<form onSubmit={onSubmitHandler}>
				<input type="text" placeholder="Enter new todo" value={text} onChange={(e) => setText(e.target.value)} />
				<Button type="submit" title="Submit">
					Submit
				</Button>
			</form>
		</div>
	)
}

export default TodoForm
