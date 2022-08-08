import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 10vh;
    color: white;
    font-family: 'Retro Cool';
    letter-spacing: 0.5rem;
    line-height: 12vh;
    @media screen and (max-width: 1500px) {
        font-size: 7vh;
        line-height: 8vh;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;

export const Button = styled.button`
    font-size: 2rem;
    margin-top: 2rem;
    color: white;
    width: 20rem;
    background-color: ${({ theme }) => theme.colors.orange};
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

export const Text = styled.p`
    font-size: 2vh;
    color: white;
    font-family: 'Poppins';
`;

export const Wrapper = styled.div`
    display: flex;
    width: 60vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background-color: ${({ theme }) => theme.colors.orange};
    @media screen and (max-width: 1500px) {
        width: 100vw;
        padding: 4vw;
    }
`;
