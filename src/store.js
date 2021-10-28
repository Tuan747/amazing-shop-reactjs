import createSagaMiddleware from 'redux-saga'
import { configureStore, } from '@reduxjs/toolkit'
import rootSaga from './sagas/rootSaga'
import sidebarReducer from './components/SideBar/sidebarSlice'
import paginationReducer from './components/Pagination/pagiSlice'
import sortReducer from './components/Sort/sortSlice'
import searchReducer from './components/Search/searchSlice'
import productsReducer from './pages/products/productsSlice'
import loadingReducer from './components/Loading/loadingSlice'

const rootReducer = {
    sidebar: sidebarReducer,
    pagination: paginationReducer,
    sort: sortReducer,
    search: searchReducer,
    products: productsReducer,
    loading: loadingReducer,
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware
})

sagaMiddleware.run(rootSaga)

export default store