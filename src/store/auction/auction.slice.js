import { createSlice } from '@reduxjs/toolkit'
import Dan from '../../images/dan.png'

const initialState = {
  title: 'Art information',
  auction_description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar fringilla porttitor. Maecenas\n' +
    '            porttitor ipsum eu ipsum sagittis, sed mollis neque aliquet. Sed vitae molestie ex. Vestibulum dapibus\n' +
    '            sagittis odio, non vestibulum felis accumsan sit amet...',
  auction_photo: Dan
}

const auctionSlice = createSlice({
  name: 'auction',
  initialState,
  reducers: {
    setAuction: (state, action) => {
      state.title = action.payload.title
      state.auction_description = action.payload.auction_description
      state.auction_photo = action.payload.auction_photo
    }
  }
})

export const auctionReducer = auctionSlice.reducer
export const auctionActions = auctionSlice.actions
export const auctionStateName = auctionSlice.name
