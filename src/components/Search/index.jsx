import React, { useRef, useState } from 'react';
import { PLACEHOLDER_SEARCH } from '../../constants';
import * as S from './styled';

function Search(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('')
    const typingTimeOut = useRef(null)

    const handleSearchTermChange = (e) => {
        const value = e.target.value
        setSearchTerm(e.target.value)

        if (typingTimeOut.current) {
            clearTimeout(typingTimeOut.current)
        }

        typingTimeOut.current = setTimeout(() => {
            const formValue = {
                searchTerm: value,
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