import { createSlice } from "@reduxjs/toolkit";

const Sidebar = createSlice({
    name: 'Sidebar',
    initialState: {
        allCategory: [],
        idCategorySelect: 1,
        idSubCategorySelect: null,
        idDetailCategorySelect: null,
        allType: [],
        idTypeSelect: [],
        allBrand: [],
        idBrandSelect: [],
        allRating: [],
        idRatingSelect: null,
    },
    reducers: {
        getCategory: (state, action) => {
        },

        getAllCategory: (state, action) => {
            return {
                ...state,
                allCategory: action.payload
            }
        },

        getIdCategorySelect: (state, action) => {
            return {
                ...state,
                idSubCategorySelect: null,
                idDetailCategorySelect: null,
                idCategorySelect: action.payload
            }
        },

        getIdDetailCategorySelect: (state, action) => {
            return {
                ...state,
                idSubCategorySelect: null,
                idDetailCategorySelect: action.payload
            }
        },

        getIdSubCategorySelect: (state, action) => {
            return {
                ...state,
                idSubCategorySelect: action.payload
            }
        },

        getTypes: (state, action) => {
        },

        getAllTypes: (state, action) => {
            return {
                ...state,
                allType: action.payload
            }
        },

        getIdTypeSelect: (state, action) => {
            if (!state.idTypeSelect.includes(action.payload)) {
                const newType = [...state.idTypeSelect, action.payload]
                return {
                    ...state,
                    idTypeSelect: newType
                }
            } else {
                const newType = state.idTypeSelect.filter(item => item !== action.payload)
                return {
                    ...state,
                    idTypeSelect: newType
                }
            }
        },

        getBrand: (state, action) => {
        },

        getAllBrand: (state, action) => {
            return {
                ...state,
                allBrand: action.payload
            }
        },

        getIdBrandSelect: (state, action) => {
            if (!state.idBrandSelect.includes(action.payload)) {
                const newType = [...state.idBrandSelect, action.payload]
                return {
                    ...state,
                    idBrandSelect: newType
                }
            } else {
                const newType = state.idBrandSelect.filter(item => item !== action.payload)
                return {
                    ...state,
                    idBrandSelect: newType
                }
            }
        },

        getRating: (state, action) => {
        },

        getAllRating: (state, action) => {
            return {
                ...state,
                allRating: action.payload
            }
        },

        getIdRatingSelect: (state, action) => {
            return {
                ...state,
                idRatingSelect: action.payload
            }
        },

        clearSidebarData: (state, action) => {
            return {
                ...state,
                idCategorySelect: 1,
                allCategory: [],
                idSubCategorySelect: null,
                idDetailCategorySelect: null,
                allType: [],
                idTypeSelect: [],
                allBrand: [],
                idBrandSelect: [],
                allRating: [],
                idRatingSelect: null,
            }
        }
    }
})

const { actions, reducer } = Sidebar
export const {
    getAllCategory,
    getCategory,
    getIdCategorySelect,
    getIdSubCategorySelect,
    getIdDetailCategorySelect,
    getTypes,
    getAllTypes,
    getIdTypeSelect,
    getBrand,
    getAllBrand,
    getIdBrandSelect,
    getRating,
    getAllRating,
    getIdRatingSelect,
    clearSidebarData,
} = actions;

export default reducer;
