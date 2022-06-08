import styled from 'styled-components';

export const SGrid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin: auto;

    @media (max-width: 600px) {
        .grid {
            width: 100%;
            flex-direction: column;
        }
    }
`;
