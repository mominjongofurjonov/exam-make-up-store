import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    likes: JSON.parse(localStorage.getItem('likes')) || [],
    stored: JSON.parse(localStorage.getItem('stored')) || [],
    
}

const mainSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        plusLike: (state, action) => {
            state.likes.push(action.payload)
            localStorage.setItem('likes', JSON.stringify(state.likes))
        },
        deleteLike: (state, action) => {
            state.likes = state.likes.filter((product) => product.id !== action.payload)
            localStorage.setItem('likes', JSON.stringify(state.likes.filter((product) => product.id !== action.payload.id)))
        },
        addItem: (state, action) => {
            state.stored.push(action.payload)
            localStorage.setItem('stored', JSON.stringify(state.stored))
        },
        deleteItem: (state, action) => {
            state.stored = state.stored.filter((product) => product.id !== action.payload)
            localStorage.setItem('stored', JSON.stringify(state.stored.filter((product) => product.id !== action.payload.id)))
        }
    }
})

export const { plusLike, deleteLike, addItem, deleteItem } = mainSlice.actions
const actionsReducer = mainSlice.reducer

export default actionsReducer 