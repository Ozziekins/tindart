import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './root.reducer'
// import React, { createContext, useReducer } from 'react'

const store = configureStore({
  reducer: rootReducer
})

// const initialState = {
//   favouriteImages: [],
//   comments: []
// }

// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// const Store = ({ children }) => {
//   const [state, dispatch] = useReducer(rootReducer, initialState)
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
// }
//
// export const Context = createContext(initialState)

export default store
