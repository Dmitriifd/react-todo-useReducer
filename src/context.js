import { createContext, useReducer } from 'react'
import { reducer } from './reducer'
import { ACTIONS } from './actions';

export const TodoContext = createContext()

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, { todos: [] })

	state.addTodoHandler = (text) => {
		dispatch({ type: ACTIONS.ADD_TODO, payload: { text } })
	}
	state.deleteTodoHandler = (id) => {
		dispatch({ type: ACTIONS.DELETE_TODO, payload: { id } })
	}
	state.toggleTodoHandler = (id) => {
		dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id } })
	}
	state.resetTodosHandler = () => {
		dispatch({ type: ACTIONS.RESET })
	}
	state.deleteCompletedTodosHandler = () => {
		dispatch({ type: ACTIONS.DELETE_COMPLETED })
	}

	return <TodoContext.Provider value={state}>{children}</TodoContext.Provider>
}
