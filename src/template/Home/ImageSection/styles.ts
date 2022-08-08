import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.orange};
    @media screen and (max-width: 1500px) {
        width: 100vw;
        order: 1;
    }
`;

export const Image = styled.img`
    width: 100rem;
    @media screen and (max-width: 1500px) {
        width: 18rem;
    }
`;
