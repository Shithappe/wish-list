import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment(state, action) {
            state.value += action.payload
          },
    }
})

export const { increment } = counter.actions;

export default counter.reducer;