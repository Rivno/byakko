import { COLOR_THEME } from '#design';
import styled from 'styled-components';

export const SSidebar = styled.div`
    grid-area: sidebar;
    background-color: ${COLOR_THEME.background.secondary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
`;

export const SSidebarLink = styled.div<{ $active: boolean }>`
    color: ${({ $active }) => $active ? COLOR_THEME.primary : COLOR_THEME.text };

    @media(hover: hover) {
        &:hover {
            color: ${COLOR_THEME.primaryFocus};
        }
    }
`;
