import styled from 'styled-components';
import { COLOR_PALETTE, COLOR_THEME } from '#design';

export const SCode = styled.code`
    background-color: ${COLOR_THEME.background.secondary};
    color: ${COLOR_PALETTE.yellow};
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
        Bitstream Vera Sans Mono, Courier New, monospace;
`;
