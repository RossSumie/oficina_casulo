import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 8rem;
    color: white;
    font-family: 'Retro Cool';
    letter-spacing: 0.5rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.blue};
    @media screen and (max-width: 900px) {
        width: 100vw;
        order: 1;
    }
`;
