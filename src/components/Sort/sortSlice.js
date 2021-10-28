import { createSlice } from "@reduxjs/toolkit";

const Sort = createSlice({
    name: 'Sort',
    initialState: {
        sortBy: '',
    },
    reducers: {
        getNewSort: (state, action) => {
            return {
                ...state,
                sortBy: action.payload
            }
        },
    }
})

const { actions, reducer } = Sort
export const {
    getNewSort,
} = actions;

export default reducer;
