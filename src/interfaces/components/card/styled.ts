import styled from 'styled-components';
import { COLOR_THEME } from '#design';

export const SCard = styled.a`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid currentColor;
    border-radius: 1rem;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 30rem;

  &:hover,
  &:focus,
  &:active {
    color: var(--color-primary-focus);
    border-color: var(--color-primary-focus);
  }

  & h2 {
    margin: 0 0 1rem 0;
    font-size: 1.8rem;
    color: var(--color-primary);
  }

  & div,
  & p {
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;
