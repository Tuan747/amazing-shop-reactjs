import React, { useState } from 'react';
import { PLACEHOLDER_SEARCH } from '../../constants';
import * as S from './styled';

function Search({ onSubmit }) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value)
        setTimeout(() => {
            const formValue = {
                searchTerm: e.target.value,
            }
            onSubmit(formValue)
        }, 300)
    }

    return (
        <S.InputGroup>
            <S.Input
                type="text"
                value={searchTerm}
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