import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';

function Loading() {
    const status = useSelector(state => state.loading.status)

    return (
        <S.ContainerLoading style={{ display: status ? 'block' : 'none' }}>
            <S.Loader />
        </S.ContainerLoading>
    )
}

export default Loading