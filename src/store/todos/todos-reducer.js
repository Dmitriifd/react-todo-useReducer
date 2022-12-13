import { v4 as uuidv4 } from 'uuid'
import { ACTIONS } from './todos-actions';

export const todos = (state = [], action) => {
	const { type, title, id } = action

	switch (type) {
		case ACTIONS.ADD_TODO: {
			return [...state, 
				{ 
					title, 
					isCompleted: false, 
					id: uuidv4() 
				}
			]
		}

		case ACTIONS.DELETE_TODO: {
			return state.filter((todo) => todo.id !== id)
		}
			
		case ACTIONS.TOGGLE_TODO: {
			return state.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo })
		}

		case ACTIONS.RESET:
			return []

		case ACTIONS.DELETE_COMPLETED:
			return state.filter((todo) => !todo.isCompleted)

		default:
			return state
	}
}
