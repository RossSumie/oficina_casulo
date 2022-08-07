import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 10vh;
    color: white;
    font-family: 'Retro Cool';
    letter-spacing: 0.5rem;
    line-height: 12vh;
    @media screen and (max-width: 900px) {
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
    border-radius: 10em;
    margin-top: 24px;
    padding: 1.5rem;
    outline: none;
    color: white;
    width: 20rem;
    font-size: 2rem;
    font-family: 'Poppins';
    position: relative;
    z-index: 1;
    cursor: pointer;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
    &:before,
    &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 10em;
        transform: translateX(-50%) translateY(-50%);
        width: 105%;
        height: 105%;
        content: '';
        z-index: -2;
        background-size: 400% 400%;
        background: linear-gradient(
            60deg,
            #42788c,
            #623d68,
            #bf443f,
            #df7d4e,
            #e9bb4d,
            #88a952,
            #42788c,
            #623d68,
            #bf443f
        );
    }
    &:before {
        transition: all 0.25s ease;
        animation: pulse 10s infinite ease;
    }
    &:after {
        filter: blur(0.3px);
    }
    &:hover {
        &:before {
            width: 115%;
            height: 115%;
        }
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
    padding: 6rem;
    background-color: ${({ theme }) => theme.colors.blue};
    @media screen and (max-width: 900px) {
        width: 100vw;
        padding: 4vw;
    }
`;
