import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PaginationNumber from '../../components/Pagination';
import SideBar from '../../components/SideBar/screen';
import { HOST_API } from '../../constants';
import * as S from './styled';
import Search from '../../components/Search';
import Sort from '../../components/Sort/screen';

const getURLType = (type) => {
    if (type && type.length) {
        const url = type.map((id) => `&type=${id}`)
        return url.join('')
    }
    return ''
}

const getURLBrand = (brand) => {
    if (brand && brand.length) {
        const url = brand.map((brand) => `&brand=${brand}`)
        return url.join('')
    }
    return ''
}

function Products() {
    const [search, setSearch] = useState('')
    const [paramURL, setParamURL] = useState({})
    const [products, setProducts] = useState([])
    const [sortPrice, setSortPrice] = useState('')
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 8,
        _totalRows: 10,
    })

    const handlePageChange = (newPage) => {
        setPagination({
            ...pagination,
            _page: newPage
        })
    }

    //get pram form sidebar
    const getParamURL = (param) => {
        setParamURL(param)
    }

    // fetch
    useEffect(() => {
        const getCategory = () => {
            const url = `${HOST_API}/products?_page=${pagination._page}&_limit=${pagination._limit}${paramURL.category ? `&category=${paramURL.category}` : ''}${paramURL.detail_category ? `&detail_category=${paramURL.detail_category}` : ''}${paramURL.sub_category ? `&sub_category=${paramURL.sub_category}` : ''}${getURLType(paramURL.type)}${getURLBrand(paramURL.brand)}${paramURL.rating ? `&rating=${paramURL.rating}` : ''}${sortPrice ? `&_sort=price&_order=${sortPrice}` : ''} `
            const option = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            fetch(url, option)
                .then(response => response.json())
                .then(data => {
                    setProducts(data.data)
                    setPagination(data?.pagination)
                })
        }
        getCategory();

    }, [paramURL, pagination._limit, pagination._page, sortPrice])

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

    const handleSearchChange = (search) => {
        setSearch(search);
    }

    const getParamSort = (e) => {
        setSortPrice(e.target.value);
    }

    return (
        <S.SideBar>
            <Search onSubmit={handleSearchChange} />
            <Row>
                <Col lg={2}>
                    <SideBar getParamURL={getParamURL} />
                </Col>
                <Col lg={10}>
                    <Sort getParamSort={getParamSort} />
                    {products && products?.filter((item) => {
                        if (search.searchTerm === undefined) {
                            return item
                        } else if (item.name.toLowerCase().includes(search.searchTerm?.toLowerCase())) {
                            return item
                        }
                    })
                        .map((item, index) => {
                            const { img, name, price, rating } = item
                            return (
                                < S.Box key={index} >
                                    <S.ImgWrapper >
                                        <S.ProductImg>
                                            <S.Img src={img} alt={name} />
                                        </S.ProductImg>
                                    </S.ImgWrapper>
                                    <S.DescWrapper>
                                        <S.ProductName>{name}</S.ProductName>
                                        <S.ProductType ></S.ProductType>
                                        <S.ProductPrice >$ {price}</S.ProductPrice>
                                        <S.ProductRating key={index}>
                                            {handleShowRating(rating)}
                                        </S.ProductRating>
                                    </S.DescWrapper>
                                </S.Box>
                            )
                        })
                    }
                </Col>
            </Row>
            <PaginationNumber
                onPageChange={handlePageChange}
                pagination={pagination}
            />
        </S.SideBar >
    );
}

export default Products;