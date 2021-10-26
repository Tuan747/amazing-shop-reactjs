import React, { useState, useEffect } from 'react';
import * as S from '../../styled';
import { HOST_API, SIDEBAR_TITLE } from '../../../../constants/index.js'

function Category({ category, detail_category, sub_category }) {
    const [subNav1, setSubNav1] = useState()
    const [subNav2, setSubNav2] = useState()
    const [itemCategory, setItemCategory] = useState([])

    const handleClickSubLv1 = (id) => {
        setSubNav1(id)
        setSubNav2(0)
        category(id)
    }

    const handleClickSubLv2 = (id) => {
        setSubNav2(id)
        detail_category(id)
    }

    useEffect(() => {
        //get all data category
        const getCategory = () => {
            const url = `${HOST_API}/categories`
            const option = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            fetch(url, option)
                .then(response => response.json())
                .then(data => setItemCategory(data))
        }
        getCategory()
    }, [])

    return (
        <S.Nav>
            <S.Title>{SIDEBAR_TITLE.category}</S.Title>
            {itemCategory.map((item, index) => {
                const { id, name } = item;
                return (
                    <div key={index}>
                        <S.TitleItem
                            key={index}
                            onClick={() => handleClickSubLv1(id)}
                        > {name}</S.TitleItem>
                        {subNav1 === index + 1 &&
                            <ul>
                                {item.detail_category.map((item2, index) => {
                                    const { id, name } = item2;
                                    return (
                                        <li key={index}>
                                            <S.TitleItem onClick={() => handleClickSubLv2(id)}>{name}</S.TitleItem>
                                            {item2.sub_category && subNav2 === index + 1 &&
                                                <ul key={index}>
                                                    {item2.sub_category.map((item3, index) => {
                                                        const { id, name } = item3
                                                        return (
                                                            <S.TitleItemLi
                                                                key={index}
                                                                onClick={() => sub_category(id)}
                                                            >{name}</S.TitleItemLi>
                                                        )
                                                    })}
                                                </ul>
                                            }
                                        </li>
                                    )
                                })}
                            </ul>
                        }
                    </div>
                )
            })}
        </S.Nav >
    );
}

export default Category;