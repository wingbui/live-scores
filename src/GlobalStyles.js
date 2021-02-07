import {createGlobalStyle}from'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: ${props => props.theme.text};
        background-color: ${props => props.theme.mainBg};
    }

    li {
        list-style: none;
    }
`

export default GlobalStyles;
