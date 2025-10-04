import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* Import de fonte Google dentro do escopo do styled-components */
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
    
    :root {
        --color-primary:${({theme})=>theme.colors.white};
        --color-secundary:${({theme})=>theme.colors.gray200};
        --color-background1:${({theme})=>theme.colors.gray300};
        --color-background2:${({theme})=>theme.colors.gray900};
        --color-text1:${({theme})=>theme.colors.cyanB};
        --color-text2:${({theme})=>theme.colors.cyanLight};
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box ;
    }

    html{
        font-size: 62.5%;
        font-family: "Ubuntu", sans-serif;
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

    section {
        height:100vh;
        width:100%;
    }
    h1{
        color:var(--color-primary);
        font-size:24pt;
    }
    h2{
        color:var(--color-primary);
        font-size:20pt;
    }
    h5{
        color:var(--color-secundary);
        font-size:18pt;
    }
    
    .content {
        flex: 1 0 auto;
    }
    
    .footer {
        height:16rem;
        width:100vw;
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
        margin: 0 auto;
        width: 90%;
        padding: 0.5rem;
        text-align: center;
    }
    .link{
        background-color: var(--color-background2)
        color: var(--color-secundary)
    }
`;
