import { createSlice } from '@reduxjs/toolkit';
import { getWish } from '../services';

const wishList = createSlice({
    name: 'wishList',
    initialState: {
        wishes: getWish()
    },
    reducers: {
        fetchWishes: state => {
            state.wishes = getWish();
        },
        addWishes(state, action) {

        },
        updateWish(state, action) {
            
        }
    }
    
})


export const { fetchWishes } = wishList.actions;

export default wishList.reducer;
