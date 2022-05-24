import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: transparent;
    transition: all ease 0.5s;

    .black {
        background-color: #141414;
    }
`;

export const Logo = styled.div`
    height: 25px;
`;

export const User = styled.div`
    height: 35px;
`;

const BaseImg = styled.img`
    height: 100%;
`;
export const ImgLogo = styled(BaseImg)``;
export const ImgUser = styled(BaseImg)`
    border-radius: 3px;
`;