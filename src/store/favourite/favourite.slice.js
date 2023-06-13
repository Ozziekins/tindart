import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favouriteImages: []
}

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.favouriteImages = state.favouriteImages.concat(action.payload.favouriteImages)
    }
  }
})

export const favouriteReducer = favouriteSlice.reducer
export const favouriteActions = favouriteSlice.actions
export const favouriteStateName = favouriteSlice.name
