import { COLOR_THEME } from '#design';
import styled from 'styled-components';

export const SList = styled.ul`
    font-size: 1.5rem;
    list-style: none;
`;

export const SListItem = styled.li`
    line-height: 1.5rem;
    &:before {
        content: "\\2022";
        font-size: 1.25rem;
        color: ${COLOR_THEME.primary};
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }

    & a {
        color: ${COLOR_THEME.secondary};
        text-decoration: none;
    }

    & a:hover,
    & a:focus,
    & a:active {
        text-decoration: underline;
    }
`;
