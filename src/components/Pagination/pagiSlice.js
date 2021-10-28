import { createSlice } from "@reduxjs/toolkit";

const Pagination = createSlice({
    name: 'Pagination',
    initialState: {
        page: 1,
        limit: 8,
        totalRows: 1,
    },
    reducers: {
        getNewPage: (state, action) => {
            return {
                ...state,
                page: action.payload
            }
        },

        getNewTotalPages: (state, action) => {
            return {
                ...state,
                totalRows: action.payload
            }
        },

        clearPage: (state, action) => {
            return {
                ...state,
                page: 1
            }
        }
    }
})

const { actions, reducer } = Pagination
export const {
    getNewPage,
    getNewTotalPages,
    clearPage
} = actions;

export default reducer;
