import React, { useState, useEffect } from 'react';
import * as S from '../../styled';
import { SIDEBAR_TITLE } from '../../../../constants/index.js'
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, getIdCategorySelect, getIdDetailCategorySelect, getIdSubCategorySelect } from '../../sidebarSlice';

function Category() {
    const [subNav1, setSubNav1] = useState()
    const [subNav2, setSubNav2] = useState()
    const dispatch = useDispatch()
    const dataCategory = useSelector(state => state.sidebar.allCategory)
    const idCategory = useSelector(state => state.sidebar.idCategorySelect)
    const idDetailCategory = useSelector(state => state.sidebar.idDetailCategorySelect)
    const idSubCategory = useSelector(state => state.sidebar.idSubCategorySelect)
    const idRating = useSelector(state => state.sidebar.idRatingSelect)
    const idBrand = useSelector(state => state.sidebar.idBrandSelect)

    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch, idCategory, idDetailCategory, idSubCategory, idRating, idBrand])

    const handleClickSubLv1 = (id) => {
        if (subNav1 !== id) {
            setSubNav1(id)
        }
        setSubNav2(0)
        dispatch(getIdCategorySelect(id))
    }

    const handleClickSubLv2 = (id) => {
        setSubNav2(id)
        dispatch(getIdDetailCategorySelect(id))
    }

    return (
        <S.Nav>
            <S.Title>{SIDEBAR_TITLE.category}</S.Title>
            {dataCategory && dataCategory.map((item, index) => {
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
                                                                onClick={() => dispatch(getIdSubCategorySelect(id))}
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