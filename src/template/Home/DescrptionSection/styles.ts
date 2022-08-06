import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 10vh;
    color: white;
    font-family: 'Retro Cool';
    letter-spacing: 0.5rem;
    line-height: 12vh;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;

export const Button = styled.button`
    margin-top: 3rem;
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
    padding: 6rem;
    background-color: ${({ theme }) => theme.colors.blue};
    @media screen and (max-width: 900px) {
        width: 100vw;
    }
`;
