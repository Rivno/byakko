import styled from 'styled-components';

export const SFooter = styled.footer`
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid var(--color-text);
    justify-content: center;
    align-items: center;

    & a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        gap: 0.5rem;
    }
`;
