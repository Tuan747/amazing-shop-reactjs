import { HOST_API } from '../constants'
import axiosClient from './axiosClient'

const typeAPI = {
    getApiAllType: (idCategory) => {
        const url = `${HOST_API}/types${idCategory ? `?category_id=${idCategory}` : ''}`
        return axiosClient.get(url)
    },
}

export default typeAPI