import React from 'react';
import { STitle } from './styled';

export const Title = ({ children, ...props }) => (
    <STitle {...props}>
        {children}
    </STitle>
);
