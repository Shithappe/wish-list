import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: 'auth',
    initialState: {
        mode: 'login'
    },
    reducers: {
        changeAuth(state, action) {
            state.mode = action.payload;
        }
    }
})

export const { changeAuth } = auth.actions;

export default auth.reducer;