import styled from 'styled-components'

export const MovieRow = styled.div`
    margin-bottom: 30px;
    &:hover .movieRow--left {
        opacity: 1;
    }
    &:hover .movieRow--right {
        opacity: 1;
    }

    @media (max-width: 425px) {
        margin-top: -25%;
    }
`;

export const H2 = styled.h2`
    margin: 0px 0px 0px 30px;
`;

export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const List = styled.div`
    transition: all ease 0.6s;
`;

export const Item = styled.div`
    display: inline-block;
    width: 150px;
`;

export const ItemImg = styled.img`
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.3s;

    &:hover{
        transform: scale(1);
        cursor: pointer;
    }
`;

const BaseArrows = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    @media (max-width: 760px) {
        opacity: 1;
    }
`;
export const ArrowLeft = styled(BaseArrows)`
    left: 0;
`;
export const ArrowRight = styled(BaseArrows)`
    right: 0;
`;
