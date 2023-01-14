import {createAction, createSlice} from '@reduxjs/toolkit'
import axiosInstance from '../utils/axiosInstance'

export const ArticleReset = createAction('ARTICLE_RESET')

const initialState = {
    isLoading: false,
    artlces: []
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    extraReducers: (builder) => builder.addCase(ArticleReset, () => initialState),
    reducers: {
        setIsLoading(state, action){
            state.isLoading = action.payload
        }
    }
})

export const selectArticleState = (state) => state.article

export const {setIsLoading} = articleSlice.actions

export const newsApi = () => async (dispatch) => {
    try{
        dispatch(setIsLoading(true))

        const req = {

        }

        const res = await axiosInstance.get('')

        dispatch(setIsLoading(false))

        console.log(res)
    } catch (e) {
        dispatch(setIsLoading(false))
    }
}

export default articleSlice.reducer