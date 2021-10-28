import { call, delay, put, takeEvery, select } from 'redux-saga/effects';
import productsAPI from '../../api/products';
import { hideLoading, showLoading } from '../../components/Loading/loadingSlice';
import { getNewTotalPages } from '../../components/Pagination/pagiSlice';
import { getAllProducts, getProducts } from './productsSlice';

function* trackingGetAllProducts() {
    yield put(showLoading())
    const { idCategorySelect, idDetailCategorySelect, idSubCategorySelect, idTypeSelect, idRatingSelect, idBrandSelect } = yield select(state => state.sidebar)
    const { page, limit } = yield select(state => state.pagination)
    const { sortBy } = yield select(state => state.sort)
    const { value } = yield select(state => state.search)
    const data
        = yield call(productsAPI.getApiAllProducts, page, limit, idCategorySelect, idDetailCategorySelect, idSubCategorySelect, idTypeSelect, idBrandSelect, idRatingSelect, sortBy, value)
    if (data.statusCode === 200) {
        yield put(getNewTotalPages(data.data.pagination._totalRows))
        yield put(getAllProducts(data.data.data))
    }
    yield delay(300)
    yield put(hideLoading())
}

function* productsSaga() {
    yield takeEvery(getProducts, trackingGetAllProducts)
}

export default productsSaga