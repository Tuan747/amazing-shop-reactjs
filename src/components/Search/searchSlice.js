import { createSlice } from "@reduxjs/toolkit";

const Search = createSlice({
    name: 'Search',
    initialState: {
        value: '',
    },
    reducers: {
        getValueSearch: (state, action) => {
            return {
                ...state,
                value: action.payload
            }
        },
    }
})

const { actions, reducer } = Search
export const {
    getValueSearch,
} = actions;

export default reducer;
