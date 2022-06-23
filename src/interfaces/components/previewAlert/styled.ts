import styled from 'styled-components';
import { COLOR_PALETTE, COLOR_THEME } from '#design';

export const SAlertPreview = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.8rem;
    background-color: ${COLOR_PALETTE.yellow};
    color: var(--color-background-primary);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`;
