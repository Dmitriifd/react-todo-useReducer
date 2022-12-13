export const ACTIONS = {
	ADD_TODO: 'add-todo',
	DELETE_TODO: 'delete-todo',
	TOGGLE_TODO: 'toggle-todo',
	RESET: 'reset',
	DELETE_COMPLETED: 'delete-completed',
}

export const addTodo = (title) => ({
	type: ACTIONS.ADD_TODO,
	title,
})
export const deleteTodo = (id) => ({
	type: ACTIONS.DELETE_TODO,
	id,
})
export const toggleTodo = (id) => ({
	type: ACTIONS.TOGGLE_TODO,
	id,
})
export const resetTodo = () => ({
	type: ACTIONS.RESET
})
export const deleteCompletedTodo = () => ({
	type: ACTIONS.DELETE_COMPLETED
})
