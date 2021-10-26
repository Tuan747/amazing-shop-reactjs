import React from 'react';
import { Col, Row } from 'react-bootstrap';
import * as S from './styled';
import { HEADER } from '../../constants'

function Header() {

    return (
        <S.Header>
            <Row className="align-items-center">
                <Col lg={1}>
                    <a href="./">
                        <img width="65px" src={HEADER.img} alt={HEADER.title} />
                    </a>
                </Col>
                <Col lg={2}>
                    <S.Logo href="./">{HEADER.title}</S.Logo>
                </Col>
            </Row>
        </S.Header>

    );
}

export default Header;