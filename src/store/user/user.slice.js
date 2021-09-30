import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username
      state.description = action.payload.description
      state.photo = action.payload.photo
    }
  }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
export const userStateName = userSlice.name
