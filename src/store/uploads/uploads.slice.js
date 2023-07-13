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
    },
    addUpload: (state, action) => {
      state.uploadedImages.push(action.payload);
    },
    removeUpload: (state, action) => {
      state.uploadedImages = state.uploadedImages.filter((image) => image !== action.payload);
    },
  }
})

export const { addUpload, removeUpload } = uploadSlice.actions;

export const fetchUploads = () => async (dispatch) => {
  try {
    const response = await await authService.getUserUploads(username);
    const { uploads } = response.data;
    dispatch(setUploads({ uploadedImages: uploads }));
  } catch (error) {
    console.error('Failed to fetch uploads:', error);
  }
};

export const uploadReducer = uploadSlice.reducer
export const uploadActions = uploadSlice.actions
export const uploadStateName = uploadSlice.name
