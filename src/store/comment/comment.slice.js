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
    },
    addComments: (state, action) => {
      state.commentTexts.push(action.payload);
    },
    removeComments: (state, action) => {
      state.commentTexts = state.commentTexts.filter((comm) => comm !== action.payload);
    },
  }
})

export const { addComments, removeComments } = commentSlice.actions;

export const fetchComments = () => async (dispatch) => {
  try {
    const response = await await authService.getUserComments(username);
    const { comments } = response.data;
    dispatch(setComments({ comments: comments }));
  } catch (error) {
    console.error('Failed to fetch user comments:', error);
  }
};

export const commentReducer = commentSlice.reducer
export const commentActions = commentSlice.actions
export const commentStateName = commentSlice.name
