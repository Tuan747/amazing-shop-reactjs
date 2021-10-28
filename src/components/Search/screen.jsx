import React from 'react';
import { useDispatch } from 'react-redux';
import { PLACEHOLDER_SEARCH } from '../../constants';
import { clearPage } from '../Pagination/pagiSlice';
import { getValueSearch } from './searchSlice';
import * as S from './styled';

function Search() {
    const dispatch = useDispatch()

    const handleSearchTermChange = (e) => {
        setTimeout(() => {
            dispatch(getValueSearch(e.target.value))
            dispatch(clearPage())
        }, 500)
    }

    return (
        <S.InputGroup>
            <S.Input
                type="text"
                onChange={handleSearchTermChange}
                placeholder={PLACEHOLDER_SEARCH}
            />
            <S.ButtonSearch>
                <i className="fa fa-search"></i>
            </S.ButtonSearch>
        </S.InputGroup>
    );
}

export default Search;