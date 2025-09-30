import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* Import de fonte Google dentro do escopo do styled-components */
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
    
    :root {
        --color-primary:${({theme})=>theme.colors.cyanB};
        --color-btn:${({theme})=>theme.colors.cyanLight};
        --color-background1:${({theme})=>theme.colors.white};
        --color-background2:${({theme})=>theme.colors.gray300};
        --color-text1:${({theme})=>theme.colors.gray200};
        --color-text2:${({theme})=>theme.colors.gray900};
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-size: 62.5%;
        font-family: "Ubuntu", sans-serif;
        min-height:100%
    }

    body {
        background: linear-gradient(-25deg, 
            var(--color-background2)  0%, 
            var(--color-background1) 100%);
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .content {
        flex: 1 0 auto;
    }

    .footer {
        flex-shrink: 0;
        text-align: center;
    }

    .bg-primary {
        background-color: var(--color-primary) !important;
    }

    .text-primary {
        color: var(--color-primary) !important;
    }

    img {
        max-width: 100%;
        display: block;
    }

    button {
        cursor: pointer;
        font-family: inherit;
    }

    a, a:hover {
        text-decoration: none;
        color: unset;
    }

    ul, ol {
        list-style: none;
    }
    .container{
        margin:0 auto;
        padding:"0.5rem";
        width: 90%;
    }
`;
