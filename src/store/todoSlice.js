import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo(state, action) {
			return [
				{
					title: action.payload,
					isCompleted: false,
					id: nanoid(),
				},
				...state,
			]
		},
		toggleTodo(state, action) {
			const id = action.payload
			const todo = state.find((todo) => todo.id === id)
			todo.isCompleted = !todo.isCompleted
		},
		deleteTodo(state, action) {
			return state.filter((todo) => todo.id !== action.payload)
		},
		resetTodo(state) {
			return state = []
		},
		deleteCompletedTodo(state) {
			return state.filter((todo) => !todo.isCompleted)
		},
	},
})

export const { addTodo, toggleTodo, deleteTodo, resetTodo, deleteCompletedTodo } = todoSlice.actions

export default todoSlice.reducer
