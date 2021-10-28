import React from 'react';
import * as S from './styled';

function Button({ width = "120px", height = "50px", text = "", ...rest }) {
    return (
        <S.Button width={width} height={height} {...rest}>{text}</S.Button>
    );
}

export default Button;