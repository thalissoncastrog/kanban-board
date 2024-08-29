import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box 
    }

    body{
        background: ${(props) => props.theme["blue-700"]};
        color: ${(props) => props.theme["gray-800"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button, header{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
            font-size: 1rem;        
    }

`;
