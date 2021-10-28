import React from 'react';
import * as S from './styled';
import Category from './components/category/screen';
import Type from './components/type/screen';
import Brand from './components/brand/screen';
import Ratings from './components/rating/screen';
import { SIDEBAR_TITLE, TITLE_BTN_CLEAR_SIDEBAR } from '../../constants';
import Button from '../Button/screen';
import { useDispatch } from 'react-redux';
import { clearSidebarData } from './sidebarSlice';
import { clearPage } from '../Pagination/pagiSlice';

function SideBar() {
    const dispatch = useDispatch()
    const handleResetFilters = () => {
        dispatch(clearSidebarData())
        dispatch(clearPage())
    }

    return (
        <S.SideBar>
            <Button
                width="50%"
                height="5%"
                background="white"
                text={TITLE_BTN_CLEAR_SIDEBAR}
                onClick={handleResetFilters}
            />
            <Category />
            <S.Nav >
                <S.Title>{SIDEBAR_TITLE.title}</S.Title>
                <Type />
                <Brand />
                <Ratings />
            </S.Nav>
        </S.SideBar>
    );
}

export default SideBar;