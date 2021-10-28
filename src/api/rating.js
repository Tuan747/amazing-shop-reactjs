import { HOST_API } from '../constants'
import axiosClient from './axiosClient'

const ratingAPI = {
    getApiAllRating: (idCategory) => {
        const url = `${HOST_API}/ratings${idCategory ? `?category_id=${idCategory}` : ''}`
        return axiosClient.get(url)
    },
}

export default ratingAPI