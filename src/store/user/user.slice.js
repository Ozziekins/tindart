import { createSlice } from '@reduxjs/toolkit'
import ProfilePhoto from '../../images/Profile photo PROFILE.png'

const initialState = {
  username: 'User Daryll',
  description: 'Vestibulum dapibus sagittis odio, non vestibulum felis accumsan sit amet',
  photo: ProfilePhoto
}

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
