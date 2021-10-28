import { createSlice } from "@reduxjs/toolkit";

const Loading = createSlice({
    name: 'Loading',
    initialState: {
        status: true,
    },
    reducers: {
        showLoading: (state, action) => {
            return {
                ...state,
                status: true
            }
        },

        hideLoading: (state, action) => {
            return {
                ...state,
                status: false
            }
        }
    }
})

const { actions, reducer } = Loading;
export const { showLoading, hideLoading } = actions
export default reducer