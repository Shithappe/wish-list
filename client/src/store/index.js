import { configureStore } from '@reduxjs/toolkit';
// import fetchWishes from './wishSlice';
import counterReducer from './counterSlice';
import authSlice from './authSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice
  },
});
