import { favouriteReducer, favouriteStateName } from './favourite/favourite.slice'
import { commentReducer, commentStateName } from './comment/comment.slice'
// import { combineReducers } from 'redux'

const rootReducer = {
  [favouriteStateName]: favouriteReducer,
  [commentStateName]: commentReducer
}

// const rootReducer = (state, action) => {
//   return {
//     ...state,
//     favouriteImages: state.favouriteImages.concat(action.payload),
//     comments: state.comments.concat(action.words)
//   }
// }

export default rootReducer
