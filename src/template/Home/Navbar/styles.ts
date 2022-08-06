import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    height: 12rem;
    justify-content: space-between;
    border-bottom: solid 1px white;
    padding: 3rem;
`;

export const Logo = styled.img`
    width: 8rem;
    height: auto;
    @media screen and (max-width: 900px) {
        width: 6rem;
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
    background-color: ${({ theme }) => theme.colors.blue};
    font-family: 'Poppins';
    padding: 1.5rem;
    border-radius: 80px;
    border: solid 3px white;
    cursor: pointer;
`;
