import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  uploadedImages: []
}

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    setUploads: (state, action) => {
      state.uploadedImages = state.uploadedImages.concat(action.payload.uploadedImages)
    }
  }
})

export const uploadReducer = uploadSlice.reducer
export const uploadActions = uploadSlice.actions
export const uploadStateName = uploadSlice.name
