import { all } from 'redux-saga/effects'
import sidebarSaga from '../components/SideBar/sidebarSaga';
import productsSaga from '../pages/products/productsSaga';

function* rootSaga() {
    yield all([
        sidebarSaga(),
        productsSaga()
    ]);
}

export default rootSaga