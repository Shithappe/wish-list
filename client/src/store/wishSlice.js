import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWish } from '../services';

export const fetchWishes = createAsyncThunk(
    'todos/fetchTodos',
    async function(_, {rejectWithValue}) {
        try {
            const response = await getWish;
            
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

