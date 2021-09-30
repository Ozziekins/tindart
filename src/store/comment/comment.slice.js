import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  commentTexts: []
}

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.commentTexts = state.commentTexts.concat(action.payload.commentTexts)
      // state.comment = state.comment.concat()
    }
  }
})

export const commentReducer = commentSlice.reducer
export const commentActions = commentSlice.actions
export const commentStateName = commentSlice.name
