import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {articleSlice} from './articleSlice'

const reducer = combineReducers({
    [articleSlice.name]: articleSlice.reducer
})

export const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV !== 'production'
})