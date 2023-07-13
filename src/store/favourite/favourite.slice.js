import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  favouriteImages: []
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.favouriteImages = state.favouriteImages.concat(action.payload.favouriteImages);
    },
    addFavourite: (state, action) => {
      state.favouriteImages.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.favouriteImages = state.favouriteImages.filter((image) => image !== action.payload);
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export const fetchFavourites = () => async (dispatch) => {
  try {
    const response = await await authService.getUserFaves(username);
    const { favourites } = response.data;
    dispatch(setFavourites({ favouriteImages: favourites }));
  } catch (error) {
    console.error('Failed to fetch favourites:', error);
  }
};

export const favouriteReducer = favouriteSlice.reducer;
export const favouriteActions = favouriteSlice.actions;
export const favouriteStateName = favouriteSlice.name;
