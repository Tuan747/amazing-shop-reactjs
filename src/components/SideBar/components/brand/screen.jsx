import React, { useEffect, useState } from 'react';
import * as S from '../../styled';
import { HOST_API, SIDEBAR_TITLE } from '../../../../constants/index.js'
import { useDispatch, useSelector } from 'react-redux';
import { getBrand, getIdBrandSelect } from '../../sidebarSlice';

function Brand() {
    const dispatch = useDispatch()
    const idCategory = useSelector(state => state.sidebar.idCategorySelect)
    const idDetailCategory = useSelector(state => state.sidebar.idDetailCategorySelect)
    const idSubCategory = useSelector(state => state.sidebar.idSubCategorySelect)
    const idType = useSelector(state => state.sidebar.idTypeSelect)
    const idRating = useSelector(state => state.sidebar.idRatingSelect)
    const dataBrand = useSelector(state => state.sidebar.allBrand)
    const [products, setProducts] = useState([])

    useEffect(() => {
        dispatch(getBrand(idCategory))

        const getCountProduct = () => {
            const url = `${HOST_API}/products?${idCategory ? `category=${idCategory}` : ''}${idDetailCategory ? `&detail_category=${idDetailCategory}` : ''}${idSubCategory ? `&sub_category=${idSubCategory}` : ''}${idRating ? `&rating=${idRating}` : ''}${handleTypeChecked(idType)}`;
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
    }, [idCategory, idType, idDetailCategory, idSubCategory, idRating, dispatch])

    const handleTypeChecked = (type) => {
        if (type && type.length) {
            const url = type.map((id) => `&type=${id}`)
            return url.join('')
        }
        return ''
    }

    const handleTotalProduct = (id) => {
        let number = 0
        products.length && products.forEach((product) => {
            if (product.brand === id) number += 1
        })
        return number
    }

    return (
        <>
            <S.TitleChild>{SIDEBAR_TITLE.brand}</S.TitleChild>
            {dataBrand.map(data => {
                return (
                    data && data.brand.map((item, index) => {
                        const { id, name } = item
                        return (
                            <S.InputForm
                                key={index}
                            >
                                <input
                                    type="checkbox"
                                    id={name}
                                    onChange={() => dispatch(getIdBrandSelect(id))}
                                />
                                <label htmlFor={name}>{name}</label>
                                ({handleTotalProduct(index + 1)})
                            </S.InputForm>
                        )
                    })
                )
            })}
        </>
    );
}

export default Brand;