import styled from 'styled-components';

export const SContainer = styled.div`
    padding: 0;
    display: grid;
    grid-template-columns: 75px 1fr;
    grid-template-rows: 100vh;
    grid-template-areas:
    "sidebar main"
`;

export const SScrollContent = styled.div`
    grid-area: main;
    overflow: auto;
    height: 100%;
`;

export const SMain = styled.main`
    min-height: 100vh;
    padding: 4rem;
    flex: 1;
    display: flex;
    flex-direction: column;
`;
