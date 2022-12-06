import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';
import { TodoContext } from '../../context';
import { useContext } from 'react';


function Todo({ todo}) {
	const { deleteTodoHandler, toggleTodoHandler } = useContext(TodoContext)
  return (
		<div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
			<RiTodoFill className={styles.todoIcon} />
			<div className={styles.todoText}>{todo.text}</div>
			<RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodoHandler(todo.id)} />
			<FaCheck className={styles.checkIcon} onClick={() => toggleTodoHandler(todo.id)} />
		</div>
	)
}

export default Todo;
