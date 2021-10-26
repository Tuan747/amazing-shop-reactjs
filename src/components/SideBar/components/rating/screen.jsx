import React, { useEffect, useState } from 'react';
import * as S from '../../styled';
import { HOST_API, SIDEBAR_TITLE } from '../../../../constants/index.js'

function Ratings({ handleGetRatings, idCategory, idDetailCategory, idSubCategory, idType, idBrand }) {
    const [rating, setRating] = useState([])
    const [products, setProducts] = useState([])

    const handleShowRating = (rating) => {
        let result = []
        for (let i = 1; i <= rating; i++) {
            result.push(<i className="fa fa-star"></i>)
        }
        for (let j = 1; j <= (5 - rating); j++) {
            result.push(<i className="fa fa-star-o"></i>)
        }
        return result
    }

    useEffect(() => {
        //get all data rating
        const getRatings = () => {
            const url = `${HOST_API}/ratings${idCategory ? `?category_id=${idCategory}` : ''}`;
            const option = {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            fetch(url, option)
                .then(response => response.json())
                .then(data => { setRating(data) })
        }

        // get products for count products
        const getCountProduct = () => {
            const url = `${HOST_API}/products?${idCategory ? `category=${idCategory}` : ''}${idDetailCategory ? `&detail_category=${idDetailCategory}` : ''}${idSubCategory ? `&sub_category=${idSubCategory}` : ''}${handleTypeChecked(idType)}${handleBrandsChecked(idBrand)}`;
            const option = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            fetch(url, option)
                .then(response => response.json())
                .then(data => setProducts(data))
        }

        getCountProduct()
        getRatings()
    }, [idCategory, idBrand, idType, idDetailCategory, idSubCategory])

    // count products
    const handleTotalProduct = (id) => {
        let number = 0
        products.length && products.forEach((product) => {
            if (product.rating === id) number += 1
        })
        return number
    }

    //paste text for URL
    const handleTypeChecked = (type) => {
        if (type && type.length) {
            const url = type.map((id) => `&type=${id}`)
            return url.join('')
        }
        return ''
    }

    //paste text for URL
    const handleBrandsChecked = (brand) => {
        if (brand && brand.length) {
            const url = brand.map((id) => `&brand=${id}`)
            return url.join('')
        }
        return ''
    }

    return (
        <>
            <S.TitleChild>{SIDEBAR_TITLE.ratings}</S.TitleChild>
            {rating.map((item, index) => {
                const { id, rating } = item;
                return (
                    <S.TitleItem
                        key={index}
                        onClick={() => handleGetRatings(id)}
                    >
                        {handleShowRating(rating)}
                        ({handleTotalProduct(index + 1)})
                    </S.TitleItem>
                )
            })}
        </>
    );
}

export default Ratings;