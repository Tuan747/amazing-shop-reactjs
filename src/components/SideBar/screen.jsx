import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Category from './components/category/screen';
import Type from './components/type/screen';
import Brand from './components/brand/screen';
import Ratings from './components/rating/screen';
import { SIDEBAR_TITLE } from '../../constants';
import Button from '../Button/index';

function SideBar({ getParamURL }) {
    const [isChecked, setIsChecked] = useState(false)
    const [filters, setFilters] = useState({
        category: 1,
        detail_category: null,
        sub_category: null,
        type: [],
        rating: null,
        brand: []
    })

    // get idCategory
    const HandleGetCategoryChild = (id) => {
        setFilters({
            ...filters,
            sub_category: null,
            detail_category: null,
            category: id
        })
        setIsChecked(true)
    }

    // get detail category id
    const HandleGetDetailCategoryChild = (id) => {
        setFilters({
            ...filters,
            sub_category: null,
            detail_category: id
        })
    }

    // get sub category id
    const HandleGetSubCategoryChild = (id) => {
        setFilters({
            ...filters,
            sub_category: id
        })
    }

    // get type id 
    const HandleGetType = (id) => {
        if (!filters.type.includes(id)) { // don't have id select in filters.type
            const newType = [...filters.type, id]
            setFilters({
                ...filters,
                type: newType
            })
        } else {
            const newType = filters.type.filter(item => item !== id) // have id select will remove
            setFilters({
                ...filters,
                type: newType
            })
        }
        setIsChecked(true)
    }

    const HandleGetBrand = (id) => {
        if (!filters.brand.includes(id)) { // don't have id select in filters.brand
            const newBrand = [...filters.brand, id]
            setFilters({
                ...filters,
                brand: newBrand
            })
        } else {
            const newBrand = filters.brand.filter(item => item !== id) // have id select will remove
            setFilters({
                ...filters,
                brand: newBrand
            })
        }
        setIsChecked(true)
    }

    // get id rating
    const HandleGetRatings = (id) => {
        setFilters({
            ...filters,
            rating: id
        })
        setIsChecked(true)
    }

    // send paramURL for parent pages/product
    useEffect(() => {
        getParamURL(filters)
    }, [filters, getParamURL])

    // reset filters
    const handleResetFilters = () => {
        setFilters({
            category: 1,
            detail_category: null,
            sub_category: null,
            type: [],
            rating: null,
            brand: []
        })
        setIsChecked(false)
    }

    return (
        <S.SideBar>
            <Button
                width="50%"
                height="5%"
                background="white"
                text="Xóa tất cả"
                onClick={handleResetFilters}
                style={{ display: isChecked ? 'block' : 'none' }}
            />
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