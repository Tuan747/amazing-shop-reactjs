import React from 'react';
import * as S from './style';
import { Pagination } from 'react-bootstrap';

function PaginationNumber(props) {
    const { pagination, onPageChange } = props
    const { _page, _limit, _totalRows } = pagination
    const totalPages = Math.ceil(_totalRows / _limit)

    const handlePageChange = (newPage) => {
        onPageChange && onPageChange(newPage)
    }

    let items = [];
    for (let i = 1; i <= totalPages; i++) {
        items.push(
            <Pagination.Item
                key={i}
                active={_page === i}
                onClick={() => handlePageChange(i)}
            > {i}
            </Pagination.Item>,
        );
    }

    return (
        <S.Pagination>
            <Pagination.Prev
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            />

            <Pagination>{items}</Pagination>

            <Pagination.Next
                disabled={_page >= totalPages}
                onClick={() => handlePageChange(_page + 1)}
            />
        </S.Pagination>
    );
}

export default PaginationNumber;