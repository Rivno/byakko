import styled from 'styled-components';

export const SLink = styled.a`
    color: var(--color-secondary);
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
        text-decoration: underline;
    }
`;
