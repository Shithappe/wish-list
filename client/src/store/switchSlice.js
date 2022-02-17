import { createSlice } from '@reduxjs/toolkit';

const switchSlice = createSlice({
    name: 'switchSlice',
    initialState: {
        add: false,
        edit: false,
        ShareList: false
    },
    reducers: {
        changeAddItemFrom: state => {
            state.add = !state.add;
        },
        changeEditItemForm: state => {
            state.edit = !state.edit;
        },
        changeShareList: state => {
            state.ShareList = !state.ShareList;
        }
    }
})

export const { changeAddItemFrom, changeEditItemForm, changeShareList } = switchSlice.actions;
export default switchSlice.reducer;