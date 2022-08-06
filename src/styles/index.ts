import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;// Isso existe para que 1rem seja igual a 10px, caso não tiver usando rem pode apagar;
    }
    @font-face {
    font-family: 'Retro Cool';
    src: url("RetroCoolRegular-rgV2O.ttf") format('truetype');
    src: url("fonts/RetroCool-Regular-c06f.woff") format('woff');

    }
    @font-face {
    font-family: 'Poppins';
    src: url("fonts/Poppins-SemiBold.ttf") format('truetype');
    }
    
`;
