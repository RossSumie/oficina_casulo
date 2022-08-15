import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    height: 12rem;
    justify-content: space-between;
    border-bottom: solid 1px white;
    padding: 3rem;
    @media screen and (max-width: 1500px) {
        height: 9rem;
    }
`;

export const DrawerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px 0px 32px;
    background-color: ${({ theme }) => theme.colors.orange};
`;

export const DrawerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 10rem;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.colors.orange};
`;

export const Logo = styled.img`
    width: 8rem;
    height: auto;
    @media screen and (max-width: 1500px) {
        width: 4rem;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    border: 2px solid white;
    border-radius: 3rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.dark_orange};
    font-family: 'Poppins';
    font-size: 2rem;
    width: 20rem;
    overflow: hidden;
    padding: 1rem 2rem;
    position: relative;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;

    &::after {
        background-color: ${({ theme }) => theme.colors.purple};
        border-radius: 3rem;
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-100%, 0) rotate(10deg);
        transform-origin: top left;
        transition: 0.2s transform ease-out;
        will-change: transform;
        z-index: -1;
    }

    &:hover::after {
        transform: translate(0, 0);
    }

    &:hover {
        color: white;
        transform: scale(1.05);
        will-change: transform;
    }
    @media screen and (max-width: 1500px) {
        padding: 0.5rem;
        font-size: 1.5rem;
        width: 15rem;
    }
`;
export const ItemContainer = styled.div`
    display: flex;
`;

export const NavText = styled.h1`
    margin-right: 3rem;
    font-size: 2rem;
    font-family: 'Poppins';
    color: white;
    cursor: pointer;
    transition: 0.3s;
    :hover {
        color: ${({ theme }) => theme.colors.yellow};
    }
    @media screen and (max-width: 1500px) {
        font-size: 1.5rem;
    }
`;
