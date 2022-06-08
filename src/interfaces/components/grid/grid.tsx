import React from 'react';
import { SGrid } from './styled';

export const Grid = ({ children, ...props }) => (
    <SGrid {...props}>
        { children }
    </SGrid>
);
