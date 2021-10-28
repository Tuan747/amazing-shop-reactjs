import { HOST_API } from '../constants'
import axiosClient from './axiosClient'

const brandAPI = {
    getApiAllBrand: (idCategory) => {
        const url = `${HOST_API}/brands${idCategory ? `?category_id=${idCategory}` : ''}`
        return axiosClient.get(url)
    },
}

export default brandAPI