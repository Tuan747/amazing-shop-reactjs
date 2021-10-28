import React, { useEffect, useState } from 'react';
import * as S from '../../styled';
import { HOST_API, SIDEBAR_TITLE } from '../../../../constants/index.js'
import { useDispatch, useSelector } from 'react-redux';
import { getIdRatingSelect, getRating } from '../../sidebarSlice';

function Ratings() {
    const [products, setProducts] = useState([])

    const dispatch = useDispatch()
    const dataRating = useSelector(state => state.sidebar.allRating)
    const idCategory = useSelector(state => state.sidebar.idCategorySelect)
    const idDetailCategory = useSelector(state => state.sidebar.idDetailCategorySelect)
    const idSubCategory = useSelector(state => state.sidebar.idSubCategorySelect)
    const idType = useSelector(state => state.sidebar.idTypeSelect)
    const idBrand = useSelector(state => state.sidebar.idBrandSelect)

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
        dispatch(getRating(idCategory))

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
                .then(data => {
                    return setProducts(data)
                })
        }

        getCountProduct()
    }, [idCategory, idBrand, idType, idDetailCategory, idSubCategory, dispatch])

    const handleTotalProduct = (id) => {
        let number = 0
        products.length && products.forEach((product) => {
            if (product.rating === id) number += 1
        })
        return number
    }

    const handleTypeChecked = (type) => {
        if (type && type.length) {
            const url = type.map((id) => `&type=${id}`)
            return url.join('')
        }
        return ''
    }

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
            {dataRating.length && dataRating.map((item, index) => {
                const { id, rating } = item;
                return (
                    <S.TitleItem
                        key={index}
                        onClick={() => dispatch(getIdRatingSelect(id))}
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