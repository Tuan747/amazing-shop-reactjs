import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import PaginationNumber from '../../components/Pagination/screen';
import SideBar from '../../components/SideBar/screen';
import * as S from './styled';
import Search from '../../components/Search/screen';
import Sort from '../../components/Sort/screen';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './productsSlice';
import { NO_PRODUCT, TOTAL_PRODUCTS } from '../../constants';

function Products() {
    const { idCategorySelect, idDetailCategorySelect, idSubCategorySelect, idTypeSelect, idRatingSelect, idBrandSelect } = useSelector(state => state.sidebar)
    const { page, limit, totalRows } = useSelector(state => state.pagination)
    const { sortBy } = useSelector(state => state.sort)
    const { value } = useSelector(state => state.search)
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()

    // fetch
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch, sortBy, value, limit, page, idTypeSelect, idSubCategorySelect, idRatingSelect, idDetailCategorySelect, idCategorySelect, idBrandSelect])

    //show rating in product
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

    const getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part, i) => {
                    return (
                        <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { color: 'red' } : {}} >
                            {part}
                        </span>
                    )
                })}
            </span >
        )
    }

    const handleShowProducts =
        (products.length > 0 &&
            products.map((item, index) => {
                const { img, name, price, rating } = item
                return (
                    <>
                        <S.Box key={index} >
                            <S.ImgWrapper >
                                <S.ProductImg>
                                    <S.Img src={img} alt={name} />
                                </S.ProductImg>
                            </S.ImgWrapper>
                            <S.DescWrapper>
                                <S.ProductName>{value ? getHighlightedText(name, value) : name}</S.ProductName>
                                <S.ProductType ></S.ProductType>
                                <S.ProductPrice >$ {price}</S.ProductPrice>
                                <S.ProductRating key={index}>
                                    {handleShowRating(rating)}
                                </S.ProductRating>
                            </S.DescWrapper>
                        </S.Box>
                    </>
                )
            }))
        ||
        <p>{NO_PRODUCT}</p>

    return (
        <S.SideBar>
            <Search />
            <Row>
                <Col lg={2}><SideBar /></Col>
                <Col lg={10}>
                    <Row>
                        <Col lg={6}><S.TotalProducts>{TOTAL_PRODUCTS} ({totalRows})</S.TotalProducts></Col>
                        <Col lg={6}><Sort /></Col>
                        <Col lg={12}>{handleShowProducts}</Col>
                    </Row>
                </Col>
            </Row>
            <PaginationNumber />
        </S.SideBar >
    );
}

export default Products;