import React from 'react';
import * as S from './style';
import { Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getNewPage } from './pagiSlice';

function PaginationNumber() {
    const { page, limit, totalRows } = useSelector(state => state.pagination)
    const dispatch = useDispatch()
    const totalPages = Math.ceil(totalRows / limit)

    const handlePageChange = (newPage) => {
        dispatch(getNewPage(newPage))
    }

    let items = [];
    for (let i = 1; i <= totalPages; i++) {
        items.push(
            <Pagination.Item
                key={i}
                active={page === i}
                onClick={() => handlePageChange(i)}
            > {i}
            </Pagination.Item>,
        );
    }

    return (
        <S.Pagination>
            <Pagination.Prev
                disabled={page <= 1}
                onClick={() => handlePageChange(page - 1)}
            />

            <Pagination>{items}</Pagination>

            <Pagination.Next
                disabled={page >= totalPages}
                onClick={() => handlePageChange(page + 1)}
            />
        </S.Pagination>
    );
}

export default PaginationNumber;