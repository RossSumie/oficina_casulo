import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10rem;
    align-items: center;
    @media screen and (max-width: 1500px) {
        padding: 2rem;
    }
`;

export const Date = styled.h1`
    font-size: 3vh;
    margin: 3rem;
    color: white;
    font-family: 'Poppins';
`;

export const LineGridContainer = styled.div`
    display: grid;
    text-align: left;
    grid-gap: 2vw;
    grid-template-columns: repeat(5, 10vw);
    @media screen and (max-width: 1500px) {
        grid-gap: 1vw;
        grid-template-columns: repeat(5, 15vw);
    }
    @media screen and (max-width: 900px) {
        grid-gap: 0;
        grid-template-columns: repeat(2, 40vw);
    }
`;

export const TextTitle = styled.h2`
    color: white;
    font-family: 'Poppins';
    letter-spacing: 0.5rem;
    text-align: center;
`;

export const Text = styled.p`
    font-size: 2vh;
    color: white;
    font-family: 'Poppins';
    @media screen and (max-width: 1500px) {
        font-size: 16px;
        word-break: break-all;
    }
    @media screen and (max-width: 1500px) {
        word-break: none;
    }
`;

export const GridItem = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
    border: solid 1px white;
`;

export const Subtext = styled.div`
    font-size: 1.5vh;
    color: white;
    font-family: 'Poppins';
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.dark_orange};
`;
