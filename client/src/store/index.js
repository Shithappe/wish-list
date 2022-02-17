import { configureStore } from '@reduxjs/toolkit';
// import fetchWishes from './wishSlice';
import counterSlice from './counterSlice';
import authSlice from './authSlice';
import wishSlice from './wishSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    wishList: wishSlice
  },
});
