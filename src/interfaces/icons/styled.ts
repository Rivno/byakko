import styled from 'styled-components';

type ContainerProps = {
    $height?: string;
    $width?: string;
};

export const SIcon = styled.i<ContainerProps>`
    color: inherit;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    font-size: 1em;
    width: ${({ $width }) => $width || '1em'};
    height: ${({ $height }) => $height || '1em'};
    > svg {
        width: ${({ $width }) => $width || '1em'};
        height: ${({ $height }) => $height || '1em'};
        display: block;
    }
`;
