import React from 'react';
import { SORT_PRICE } from '../../constants';
import * as S from './style'
import { useDispatch } from 'react-redux';
import { getNewSort } from './sortSlice';

function Sort() {
    const dispatch = useDispatch()
    const handleGetValue = (e) => {
        dispatch(getNewSort(e.target.value))
    }

    return (
        <S.ContainerSort>
            <S.SelectSort onChange={handleGetValue}>
                <option value="asc">{SORT_PRICE.asc}</option>
                <option value="desc">{SORT_PRICE.desc}</option>
            </S.SelectSort>
        </S.ContainerSort>
    );
}

export default Sort;