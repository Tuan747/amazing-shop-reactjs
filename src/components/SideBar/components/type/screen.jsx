import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { HOST_API, SIDEBAR_TITLE } from '../../../../constants';
import { getIdTypeSelect, getTypes } from '../../sidebarSlice';
import * as S from '../../styled';

function Type() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const dataTypes = useSelector(state => state.sidebar.allType)
    const idCategory = useSelector(state => state.sidebar.idCategorySelect)
    const idDetailCategory = useSelector(state => state.sidebar.idDetailCategorySelect)
    const idSubCategory = useSelector(state => state.sidebar.idSubCategorySelect)
    const idRating = useSelector(state => state.sidebar.idRatingSelect)
    const idBrand = useSelector(state => state.sidebar.idBrandSelect)

    useEffect(() => {
        dispatch(getTypes(idCategory))

        const getCountProduct = () => {
            const url = `${HOST_API}/products?${idCategory ? `category=${idCategory}` : ''}${idDetailCategory ? `&detail_category=${idDetailCategory}` : ''}${idSubCategory ? `&sub_category=${idSubCategory}` : ''}${idRating ? `&rating=${idRating}` : ''}${handleBrandsChecked(idBrand)}`;
            const option = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            fetch(url, option)
                .then(response => response.json())
                .then(data => { setProducts(data) })
        }

        getCountProduct()
    }, [idCategory, idBrand, idDetailCategory, idSubCategory, idRating, dispatch])

    const handleTotalProduct = (id) => {
        let number = 0
        products.length && products.forEach((product) => {
            if (product.type === id) number += 1
        })
        return number
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
            <S.TitleChild>{SIDEBAR_TITLE.type}</S.TitleChild>
            {dataTypes?.length && dataTypes.map(data => {
                return (
                    data.type.map((item, index) => {
                        const { id, name } = item
                        return (
                            <S.InputForm key={index}>
                                <input
                                    type="checkbox"
                                    id={name}
                                    onChange={() => dispatch(getIdTypeSelect(id))} />
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

export default Type;