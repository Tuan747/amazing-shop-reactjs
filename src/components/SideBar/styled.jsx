import styled from 'styled-components'

export const SideBar = styled.section`
    // position: fixed;
    // overflow-y: scroll;
    // width: 15%;
    // top: 18%;
    // bottom: 0;
`;

export const Nav = styled.div`
    padding-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding-bottom: 12px;
    border-bottom: solid 1px #eee;
    margin-bottom: 12px;
    font-size: .87em;
`;

export const Title = styled.div`
    font-size: 1.2em;
    color: #888;
    margin: 0 0 8px;
`;


export const TitleItem = styled.span`
    font-size: 13px;
    cursor: pointer;
    & i {
        color: yellow;
        margin-left: 2px;
    }
    &:hover {
        color: red;
    }
`;

export const TitleItemLi = styled.li`
    font-size: 13px;
    cursor: pointer;
    &:hover {
        color: red;
    }
`;

export const TitleChild = styled.div`
    font-size: 1em;
    color: #888;
    font-weight: 700;
    margin: 0 0 8px;
`;

export const InputForm = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    & label {
        margin-left: 1rem;
        cursor: pointer;
    }
`;

export const InputPrice = styled.input`
    width: 25%;
    margin: 5px;
    padding: 0 5px;
`;

export const BtnSubmit = styled.button`
    border-radius: 50%;
    width: 12%;
`;