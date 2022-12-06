import { v4 as uuidv4 } from 'uuid'
import { ACTIONS } from './actions'

export const reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.ADD_TODO: {
			const newTodo = {
				text: payload.text,
				isCompleted: false,
				id: uuidv4(),
			}
			if (newTodo.text) {
				return { ...state, todos: [newTodo, ...state.todos] }
			}
		}

		case ACTIONS.DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== payload.id),
			}

		case ACTIONS.TOGGLE_TODO: {
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === payload.id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
				),
			}
		}

		case ACTIONS.RESET:
			return {
				...state,
				todos: [],
			}

		case ACTIONS.DELETE_COMPLETED:
			return {
				...state,
				todos: state.todos.filter((todo) => !todo.isCompleted),
			}

		default:
			return state
	}
}
