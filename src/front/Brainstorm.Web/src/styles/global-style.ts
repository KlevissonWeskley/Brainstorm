import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Inter", sans-serif;
        background-color: ${props => props.theme['gray-700']};
        color: ${props => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    :focus {
        outline: none;
    }
`