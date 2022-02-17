import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWish } from '../services';

const wishList = createSlice({
    name: 'wishList',
    initialState: {
        wishes: getWish()
    },
    
})

export default wishList.reducer;

