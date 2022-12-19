import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { deleteCompletedTodo, resetTodo } from 'store/todoSlice'


import Button from '../UI/Button'

import styles from './TodosActions.module.css'

function TodosActions({ completedTodoExist }) {
	const dispatch = useDispatch()

	return (
		<div className={styles.todosActionsContainer}>
			<Button title="Reset Todos" onClick={() => dispatch(resetTodo())}>
				<RiRefreshLine />
			</Button>
			<Button title="Clear Complete Todos" onClick={() => dispatch(deleteCompletedTodo())} disabled={!completedTodoExist}>
				<RiDeleteBin2Line />
			</Button>
		</div>
	)
}

export default TodosActions
