import { favouriteReducer, favouriteStateName } from './favourite/favourite.slice'
import { commentReducer, commentStateName } from './comment/comment.slice'
import { uploadReducer, uploadStateName } from './uploads/uploads.slice'
import { userReducer, userStateName } from './user/user.slice'
import { auctionReducer, auctionStateName } from './auction/auction.slice'
// import { combineReducers } from 'redux'

const rootReducer = {
  [favouriteStateName]: favouriteReducer,
  [commentStateName]: commentReducer,
  [uploadStateName]: uploadReducer,
  [userStateName]: userReducer,
  [auctionStateName]: auctionReducer
}

// const rootReducer = (state, action) => {
//   return {
//     ...state,
//     favouriteImages: state.favouriteImages.concat(action.payload),
//     comments: state.comments.concat(action.words)
//   }
// }

export default rootReducer
