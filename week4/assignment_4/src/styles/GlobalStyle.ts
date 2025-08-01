import { css } from '@emotion/react';
import { theme } from './Theme';

const GlobalStyle = () => css`
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table, textarea, input{   
        margin: 0;
        padding: 0;
        border: 0;
        text-decoration: none;
        box-sizing: border-box;
        &:visited{
        color: black;
        }
    }
    body{
        background-color: ${theme.color.gray100};
        line-height: 1;
        margin: 0;
        padding: 0;
    }
    ol, ul{
        list-style: none;
    }
    button {     
        border: 0;
        cursor: pointer;
    }
    `;

export default GlobalStyle;
