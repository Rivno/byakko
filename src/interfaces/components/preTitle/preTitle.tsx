import React from 'react';
import { SPreTitle } from './styled';

export const PreTitle = ({ children, ...props }) => (
    <SPreTitle {...props}>
        {children}
    </SPreTitle>
);
