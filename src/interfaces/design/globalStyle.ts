import { createGlobalStyle } from 'styled-components';
import { COLOR_PALETTE } from './colors';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-background-primary: ${COLOR_PALETTE.bgLight};
        --color-background-secondary: ${COLOR_PALETTE.purpleLight};
        --color-primary: ${COLOR_PALETTE.blueLight};
        --color-primary-focus: ${COLOR_PALETTE.blueDark};
        --color-secondary: ${COLOR_PALETTE.purpleDark};
        --color-text: ${COLOR_PALETTE.bgDark};
    }

    [data-theme="dark"] {
        --color-background-primary: ${COLOR_PALETTE.bgGrey};
        --color-background-secondary: ${COLOR_PALETTE.purpleDark};
        --color-secondary: ${COLOR_PALETTE.purpleLight};
        --color-text: ${COLOR_PALETTE.light};
    }

    html,
    body {
        padding: 0;
        margin: 0;
        background-color: var(--color-background-primary);
        color: var(--color-text);
        font-size: 10px;
        word-spacing: -3px;
        font-family: Menlo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;
