import { call, put, takeEvery } from 'redux-saga/effects';
import brandAPI from '../../api/brand';
import categoryAPI from '../../api/category';
import ratingAPI from '../../api/rating';
import typeAPI from '../../api/type';
import { getAllBrand, getAllCategory, getAllRating, getAllTypes, getBrand, getCategory, getRating, getTypes } from './sidebarSlice';

//handle show first data category
function* trackingGetAllCategory() {
    const data = yield call(categoryAPI.getApiAllCategory)
    if (data.statusCode === 200) {
        yield put(getAllCategory(data.data))
    }
}

//handle show first data types
function* trackingGetAllTypes(idCategory) {
    const data = yield call(typeAPI.getApiAllType, idCategory.payload)
    if (data.statusCode === 200) {
        yield put(getAllTypes(data.data))
    }
}

//handle show first data brand
function* trackingGetAllBrand(idCategory) {
    const data = yield call(brandAPI.getApiAllBrand, idCategory.payload)
    if (data.statusCode === 200) {
        yield put(getAllBrand(data.data))
    }
}

//handle show first data rating
function* trackingGetAllRatings(idCategory) {
    const data = yield call(ratingAPI.getApiAllRating, idCategory.payload)
    if (data.statusCode === 200) {
        yield put(getAllRating(data.data))
    }
}

function* sidebarSaga() {
    yield takeEvery(getCategory, trackingGetAllCategory)
    yield takeEvery(getTypes, trackingGetAllTypes)
    yield takeEvery(getBrand, trackingGetAllBrand)
    yield takeEvery(getRating, trackingGetAllRatings)
}

export default sidebarSaga