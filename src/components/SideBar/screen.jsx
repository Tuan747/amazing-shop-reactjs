import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Category from './components/category/screen';
import Type from './components/type/screen';
import Brand from './components/brand/screen';
import Ratings from './components/rating/screen';
import { SIDEBAR_TITLE } from '../../constants';

function SideBar(props) {
    const { getParamURL } = props;
    const [filters, setFilters] = useState({
        category: 1,
        detail_category: null,
        sub_category: null,
        type: [],
        rating: null,
        brand: []
    })

    const HandleGetCategoryChild = (id) => {
        setFilters({
            ...filters,
            sub_category: null,
            detail_category: null,
            category: id
        })
    }

    const HandleGetDetailCategoryChild = (id) => {
        setFilters({
            ...filters,
            sub_category: null,
            detail_category: id
        })
    }

    const HandleGetSubCategoryChild = (id) => {
        setFilters({
            ...filters,
            sub_category: id
        })
    }

    const HandleGetType = (id) => {
        if (!filters.type.includes(id)) {
            const newType = [...filters.type, id]
            setFilters({
                ...filters,
                type: newType
            })
        } else {
            const newType = filters.type.filter(item => item !== id)
            setFilters({
                ...filters,
                type: newType
            })
        }
    }

    const HandleGetBrand = (id) => {
        if (!filters.brand.includes(id)) {
            const newBrand = [...filters.brand, id]
            setFilters({
                ...filters,
                brand: newBrand
            })
        } else {
            const newBrand = filters.brand.filter(item => item !== id)
            setFilters({
                ...filters,
                brand: newBrand
            })
        }
    }

    const HandleGetRatings = (id) => {
        setFilters({
            ...filters,
            rating: id
        })
    }

    useEffect(() => {
        getParamURL(filters)
    }, [filters, getParamURL])

    return (
        <S.SideBar>
            <Category
                category={HandleGetCategoryChild}
                detail_category={HandleGetDetailCategoryChild}
                sub_category={HandleGetSubCategoryChild}
            />

            <S.Nav >
                <S.Title>{SIDEBAR_TITLE.title}</S.Title>
                <Type
                    handleGetType={HandleGetType}
                    idCategory={filters.category}
                    idBrand={filters.brand}
                    idDetailCategory={filters.detail_category}
                    idSubCategory={filters.sub_category}
                    idRating={filters.rating}
                />
                <Brand
                    handleGetBrand={HandleGetBrand}
                    idCategory={filters.category}
                    idType={filters.type}
                    idDetailCategory={filters.detail_category}
                    idSubCategory={filters.sub_category}
                    idRating={filters.rating}
                />
                <Ratings
                    handleGetRatings={HandleGetRatings}
                    idCategory={filters.category}
                    idDetailCategory={filters.detail_category}
                    idSubCategory={filters.sub_category}
                    idType={filters.type}
                    idBrand={filters.brand}
                />
            </S.Nav>
        </S.SideBar>);
}

export default SideBar;