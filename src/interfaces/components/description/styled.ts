import styled from 'styled-components';
import { COLOR_THEME } from '#design';

export const SDescription = styled.p`
    line-height: 1.5;
    font-size: 1.8rem;

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
