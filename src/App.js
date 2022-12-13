import { useSelector } from 'react-redux'
import TodoList from './components/Todos/TodoList'
import TodoForm from './components/Todos/TodoForm'
import TodosActions from './components/Todos/TodosActions'
import { selectAllTodos } from './store/todos/todos-selectors'
import './App.css'

function App() {
	const todos = useSelector(selectAllTodos)
	const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

	return (
		<div className="App">
			<h1>Todo List</h1>
			<TodoForm />
			{todos.length > 0 && <TodosActions completedTodoExist={!!completedTodosCount} />}

			<TodoList todos={todos} />
			{completedTodosCount > 0 && (
				<h2>{`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`}</h2>
			)}
		</div>
	)
}

export default App
