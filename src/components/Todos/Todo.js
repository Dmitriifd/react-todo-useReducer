import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from 'store/todoSlice';




function Todo({ todo }) {
	const dispatch = useDispatch()

  return (
		<div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
			<RiTodoFill className={styles.todoIcon} />
			<div className={styles.todoText}>{todo.title}</div>
			<RiDeleteBin2Line className={styles.deleteIcon} onClick={() => dispatch(deleteTodo(todo.id))} />
			<FaCheck className={styles.checkIcon} onClick={() => dispatch(toggleTodo(todo.id))} />
		</div>
	)
}

export default Todo;
