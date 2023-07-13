import { createSlice } from '@reduxjs/toolkit';
import authService from '../../services/authService';
import ProfilePhoto from '../../images/Profile photo PROFILE.png';

const initialState = {
  username: '',
  displayName: 'Display name',
  description: 'add your description here',
  photo: ProfilePhoto
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.displayName = action.payload.displayName;
      state.description = action.payload.description;
      state.photo = action.payload.photo;
    }
  }
});

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;
export const userActions = {
  fetchUserData: (username) => async (dispatch) => {
    try {
      const response = await authService.getUserData(username);
      const { displayName, description, photo } = response.data;
      dispatch(setUser({ username, displayName, description, photo }));
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  }
};

export const userStateName = userSlice.name;
