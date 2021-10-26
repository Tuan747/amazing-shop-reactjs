import React, { useEffect, useState } from 'react';
import { HOST_API, SIDEBAR_TITLE } from '../../../../constants';
import * as S from '../../styled';

function Type({ handleGetType, idCategory, idBrand, idDetailCategory, idSubCategory, idRating }) {
    const [itemType, setItemType] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        //get all data type
        const getType = () => {
            const url = `${HOST_API}/types${idCategory ? `?category_id=${idCategory}` : ''}`;
            const option = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            fetch(url, option)
                .then(response => response.json())
                .then(data => setItemType(data))
        }

        // get products for count products
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
                .then(data => setProducts(data))
        }

        getCountProduct()
        getType()
    }, [idCategory, idBrand, idDetailCategory, idSubCategory, idRating])

    // count products
    const handleTotalProduct = (id) => {
        let number = 0
        products.length && products.forEach((product) => {
            if (product.type === id) number += 1
        })
        return number
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
            <S.TitleChild>{SIDEBAR_TITLE.type}</S.TitleChild>
            {itemType.length && itemType.map(data => {
                return (
                    data.type.map((item, index) => {
                        const { id, name } = item
                        return (
                            <S.InputForm key={index}>
                                <input
                                    type="checkbox"
                                    id={name}
                                    onChange={() => handleGetType(id)} />
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