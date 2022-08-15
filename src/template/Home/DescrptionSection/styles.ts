import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 10vh;
    color: white;
    font-family: 'Retro Cool';
    letter-spacing: 0.5rem;
    line-height: 9.5vh;
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

export const Text = styled.p`
    font-size: 2vh;
    color: white;
    font-family: 'Poppins';
    margin-bottom: 1.5rem;
`;
export const SubText = styled.p`
    margin-top: 2rem;
    font-size: 1.25vh;
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
    background-color: ${({ theme }) => theme.colors.dark_orange};
    @media screen and (max-width: 1500px) {
        width: 100vw;
        padding: 4vw;
    }
`;
