import styled, { keyframes } from 'styled-components';

const loadSkeleton = keyframes`
    0% {
        opacity: .4;
    }
    50% {
        opacity: .8;
    }
    100% {
        opacity: .4;
    }
`;

export const Skeleton = styled.div`
    height: 1.6rem;
    background-color: #F2F4F5;
    position: relative;
    display: inline-block;
    &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #BFC8CC;
        animation: ${loadSkeleton} 2s infinite;
    }
`;

export const SkeletonCheckbox = styled(Skeleton)`
    width: 1.3rem;
    height: 1.3rem;
`;
