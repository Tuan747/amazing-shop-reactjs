import axiosClient from './axiosClient'

const categoryAPI = {
    getApiAllCategory: () => {
        const url = `/categories`
        return axiosClient.get(url)
    },
}

export default categoryAPI