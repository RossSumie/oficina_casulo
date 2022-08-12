import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2vh;
    color: white;
    letter-spacing: 4px;
    font-family: 'Poppins';
`;

export const Container = styled.div`
    display: flex;
    width: 60vw;
    flex-direction: column;
    align-items: center;
    border-top: solid 1px white;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.dark_orange};
    @media screen and (max-width: 1500px) {
        width: 100vw;
    }
`;

export const LineContainer = styled.div`
    display: flex;
    width: 60vw;
    align-items: center;
    justify-content: center;
`;
export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem;
    border: solid 1px white;
    width: 30vw;
    height: 20vh;
    @media screen and (max-width: 1500px) {
        width: 100vw;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
`;

export const Text = styled.h1`
    font-size: 1.85vh;
    color: white;
    font-family: 'Poppins';
`;

export const Icon = styled.img`
    width: 8rem;
    height: auto;
    margin: 1.5rem;
    @media screen and (max-width: 1500px) {
        width: 6rem;
    }
`;
