import styled from "styled-components";

export const SideBar = styled.section`
    margin-top: 100px;
`;

export const Box = styled.article`
    width: 24%;
    float: left;
    padding: 10px 20px 20px;
    margin-bottom: 10px;
    border-bottom: solid 1px #EEE;
    margin: .5%;
    border: solid 1px #EEE;
    box-shadow: 0 0 3px #f6f6f6;
    position: relative;
`;

export const ImgWrapper = styled.div`
    display: table;
    table-layout: fixed;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
`;

export const ProductImg = styled.div`
    display: table-cell;
    vertical-align: middle;
    margin: 0 auto;
`;

export const Img = styled.img`
    transition: opacity 500ms cubic-bezier(0.19, 1, 0.22, 1);
    height: 150px;
    max-width: 100%;
`;

export const DescWrapper = styled.div`
    height: 150px;
    width: 100%;
    overflow: hidden;
`;

export const ProductName = styled.div`
    height: 100px;
    width: 100%;
    overflow: hidden;
`;

export const ProductType = styled.div`
    font-size: .8em;
    margin: 0 0 10px;
    color: #a2a2a2;
`;

export const ProductPrice = styled.div`
    font-size: 1.1em;
    font-weight: bold;
    color: #000000;
    float: right;
    letter-spacing: -1px;
`;

export const ProductRating = styled.div`
    margin-bottom: 10px;
    color: yellow;
`;