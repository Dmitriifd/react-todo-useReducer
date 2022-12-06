import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import { useContext } from 'react'
import { TodoContext } from '../../context'

import Button from '../UI/Button'

import styles from './TodosActions.module.css'

function TodosActions({ completedTodoExist }) {
	const { deleteCompletedTodosHandler, resetTodosHandler } = useContext(TodoContext)

	return (
		<div className={styles.todosActionsContainer}>
			<Button title="Reset Todos" onClick={resetTodosHandler}>
				<RiRefreshLine />
			</Button>
			<Button title="Clear Complete Todos" onClick={deleteCompletedTodosHandler} disabled={!completedTodoExist}>
				<RiDeleteBin2Line />
			</Button>
		</div>
	)
}

export default TodosActions
