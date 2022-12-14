import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-height: calc(100vh - 12rem);
    @media screen and (max-width: 1500px) {
        flex-direction: column;
    }
`;

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.dark_orange};
    flex-direction: column;
    display: flex;
    @media screen and (max-width: 1500px) {
        height: auto;
    }
`;
export const TextContainer = styled.div`
    align-items: center;
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-right: solid 1px white;
    @media screen and (max-width: 1500px) {
        width: 100vw;
        order: 2;
    }
`;
