import { useState } from 'react'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import styles from './TodoForm.module.css'
import { addTodo } from 'store/todoSlice'


function TodoForm() {
	const dispatch = useDispatch()
	const [text, setText] = useState('')

	const onSubmitHandler = (e) => {
		e.preventDefault()
		dispatch(addTodo(text))
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
