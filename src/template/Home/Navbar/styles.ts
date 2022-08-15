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
    font-size: 2rem;
    color: white;
    width: 20rem;
    background-color: ${({ theme }) => theme.colors.dark_orange};
    font-family: 'Poppins';
    padding: 1.5rem;
    border-radius: 80px;
    border: solid 3px white;
    cursor: pointer;
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
    @media screen and (max-width: 1500px) {
        font-size: 1.5rem;
    }
`;
