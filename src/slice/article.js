import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  articleDetail: null,
  error: null
}

export const authSlice = createSlice({
  name: 'article',
  initialState,
  reducers:{
    getArticleStart: (state) => {
      state.isLoading = true
    },
    getArticleSuccess: (state, action) => {
      state.isLoading = false
      state.articles = action.payload
    },
    getArticleFailure: (state, action) => {
      state.error = action.payload
    },
    getArticleDetailStart: (state) => {
      state.isLoading = true
    },
    getArticleDetailSuccess: (state, action) => {
      state.isLoading = false
      state.articleDetail = action.payload
    },
    getArticleDetailFailure: (state) => {
      state.isLoading = false
    },
    postArticleStart: (state) => {
      state.isLoading = true
    },
    postArticleSuccess: (state, action) => {
      state.isLoading = false
    },
    postArticleFailure: (state) => {
      state.isLoading = false
      state.error = 'Error'
    }
  }
})

export const { 
  getArticleStart,
  getArticleSuccess,
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailure,
  postArticleStart,
  postArticleSuccess,
  postArticleFailure
} = authSlice.actions
export default authSlice.reducer