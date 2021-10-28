import { HOST_API } from '../constants'
import axiosClient from './axiosClient'

const getURLType = (type) => {
    if (type && type.length) {
        const url = type.map((id) => `&type=${id}`)
        return url.join('')
    }
    return ''
}

const getURLBrand = (brand) => {
    if (brand && brand.length) {
        const url = brand.map((brand) => `&brand=${brand}`)
        return url.join('')
    }
    return ''
}

const productsAPI = {
    getApiAllProducts: (page, limit, idCategorySelect, idDetailCategorySelect, idSubCategorySelect, idTypeSelect, idBrandSelect, idRatingSelect, sortBy, value) => {
        const url = `${HOST_API}/products?_page=${page}&_limit=${limit}${idCategorySelect ? `&category=${idCategorySelect}` : ''}${idDetailCategorySelect ? `&detail_category=${idDetailCategorySelect}` : ''}${idSubCategorySelect ? `&sub_category=${idSubCategorySelect}` : ''}${getURLType(idTypeSelect)}${getURLBrand(idBrandSelect)}${idRatingSelect ? `&rating=${idRatingSelect}` : ''}${sortBy ? `&_sort=price&_order=${sortBy}` : ''}&name_like=${value}`
        return axiosClient.get(url)
    },
}

export default productsAPI