import styled from 'styled-components';
import { COLOR_THEME } from '#design';

export const STitle = styled.h1`
    margin: 0;
    line-height: 4rem;
    font-size: 6rem;
    color: var(--color-primary);

    & a {
        color: var(--color-secondary);
        text-decoration: none;
    }

    & a:hover,
    & a:focus,
    & a:active {
        text-decoration: underline;
    }
`;
