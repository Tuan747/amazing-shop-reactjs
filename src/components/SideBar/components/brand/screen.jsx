import React, { useEffect, useState } from 'react';
import * as S from '../../styled';
import { HOST_API, SIDEBAR_TITLE } from '../../../../constants/index.js'

function Brand(props) {
    const { handleGetBrand, idCategory, idDetailCategory, idSubCategory, idType, idRating } = props
    const [itemBrand, setItemBrand] = useState([])
    const [idBrand, setIdBrand] = useState(1)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getBrand = () => {
            const url = `${HOST_API}/brands${idCategory ? `?category_id=${idCategory}` : ''}`;
            const option = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            fetch(url, option)
                .then(response => response.json())
                .then(data => { setItemBrand(data) })
        }

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
                .then(data => {
                    return setProducts(data)
                })
        }

        getBrand()
        getCountProduct()
    }, [idCategory, idType, idBrand, idDetailCategory, idSubCategory, idRating])

    const handleTotalProduct = (id) => {
        let number = 0
        products.length && products.map((product) => {
            if (product.brand === id) number += 1
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

    return (
        <>
            <S.TitleChild>{SIDEBAR_TITLE.brand}</S.TitleChild>
            {itemBrand.map(data => {
                return (
                    data && data.brand.map((item, index) => {
                        const { id, name } = item
                        return (
                            <S.InputForm
                                key={index}
                                onClick={() => setIdBrand(id)}
                            >
                                <input type="checkbox" id={name} onChange={() => handleGetBrand(id)} />
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