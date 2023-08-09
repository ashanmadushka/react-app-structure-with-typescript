// import { createLogger } from 'redux-logger';
// import { applyMiddleware, createStore } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import reducer from './reducer';

// const loggerMiddleware = createLogger();

// export const store = createStore(
//   reducer,
//   applyMiddleware(thunkMiddleware, loggerMiddleware)
// );

import { configureStore } from '@reduxjs/toolkit'
import initReducer from '../Reducer/initReducer'

const store = configureStore({
  reducer: {
    init: initReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store
