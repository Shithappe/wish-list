import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import authSlice from './authSlice';
import wishSlice from './wishSlice';
import switchSlice from './switchSlice';

export default configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    wishList: wishSlice,
    switches: switchSlice
  },
});
