import { COLOR_THEME } from '#design';
import styled from 'styled-components';

export const SSidebarContainer = styled.div`
    position: relative;
    grid-area: sidebar;
    display: flex;
    align-items: center;

    &:before {
        content: '';
        background-color: var(--color-primary);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

export const SSidebar = styled.div`
    background-color: var(--color-background-secondary);
    min-width: 7.5rem;
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 2rem;
    height: fit-content;
    padding: 5rem 1rem;
    border-radius: 4rem;
    position: relative;
    left: 1rem;
    font-size: 1rem;
`;

export const SSidebarLink = styled.div<{ $active: boolean }>`
    color: ${({ $active }) => $active ? 'var(--color-primary)' : 'var(--color-text)' };

    @media(hover: hover) {
        &:hover {
            color: var(--color-primary-focus);
        }
    }
`;
