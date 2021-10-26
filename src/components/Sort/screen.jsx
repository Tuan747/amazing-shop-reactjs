import React from 'react';
import { SORT_PRICE } from '../../constants';
import * as S from './style'

function Sort(props) {
    const { getParamSort } = props
    return (
        <S.ContainerSort>
            <S.SelectSort onChange={getParamSort}>
                <option value="asc">{SORT_PRICE.asc}</option>
                <option value="desc">{SORT_PRICE.desc}</option>
            </S.SelectSort>
        </S.ContainerSort>
    );
}

export default Sort;