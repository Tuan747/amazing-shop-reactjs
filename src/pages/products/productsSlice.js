import { createSlice } from "@reduxjs/toolkit";

const Products = createSlice({
    name: 'Products',
    initialState: {
        products: [],
    },
    reducers: {
        getProducts: (state, action) => {
        },

        getAllProducts: (state, action) => {
            return {
                ...state,
                products: action.payload
            }
        },
    }
})

const { actions, reducer } = Products
export const {
    getProducts,
    getAllProducts,
} = actions;

export default reducer;
