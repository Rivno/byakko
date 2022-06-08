import { createGlobalStyle } from 'styled-components';
import { COLOR_THEME } from './colors';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${COLOR_THEME.background.primary};
    color: ${COLOR_THEME.text};
    font-size: 12px;
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
