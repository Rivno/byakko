import styled from 'styled-components';
import { COLOR_THEME } from '#design';

export const SFrontContextSettings = styled.div`
    display: grid;
    grid-auto-flow: column;
    position: absolute;
    top: 0;
    right: 0;
    width: fit-content;
    padding: 1rem;
    background-color: var(--color-background-secondary);
    color: ${COLOR_THEME.text};
    border-bottom-left-radius: 6px;
`;

export const SLabel = styled.label`
    display: inline-flex;
    gap: 0.5rem;
    place-items: center;
    font-weight: 600;
    min-width: 55px;
    justify-content: right;
`;

export const SCheckbox = styled.input.attrs({ type: 'checkbox' })`
    margin: 0;
`;
