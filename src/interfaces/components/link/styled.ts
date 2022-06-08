import styled from 'styled-components';
import { COLOR_THEME } from '#design';

export const SLink = styled.a`
    color: ${COLOR_THEME.secondary};
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
        text-decoration: underline;
    }
`;
