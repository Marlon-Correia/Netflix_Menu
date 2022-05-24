import styled from "styled-components";

export const Featured = styled.section`
    height: 100vh;
`;

export const FeaturedVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%)
`;
export const FeaturedHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%,transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 130px;
    padding-top: 72px;
`;

export const Name = styled.div`
    font-size: 60px;
    font-weight: bold;
    max-width: 80%;

    @media (max-width: 425px) {
        font-size: 36px;
    }
`;

export const Info = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
    @media (max-width: 425px) {
        font-size: 12px;
    }
`;

const BaseInfo = styled.div`
    display: inline-block;
    margin-right: 15px;
`;
export const Points = styled(BaseInfo)`
    color: #46d369;
`;
export const Year = styled(BaseInfo)``;
export const Seasons = styled(BaseInfo)``;

export const Desc = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;

    @media (max-width: 425px) {
        max-width: 80%;
        font-size: 16px;
    }
`;

export const AreaButtons = styled.div`
    margin-top: 15px;
`;

const BaseButton = styled.a`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    transition: all ease 0.3s;
    opacity: 1;

    &:hover{
        opacity: 0.7;
    }

    @media (max-width: 425px) {
        padding: 10px 20px;
        font-size: 16px;
    }
`;
export const buttonWatch = styled(BaseButton)`
    background-color: #fff;
    color: #000;
`;
export const buttonList = styled(BaseButton)`
    background-color: #333;
    color: #fff;
`;

export const Genres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;

    @media (max-width: 425px) {
        font-size: 12px;
    }
`;