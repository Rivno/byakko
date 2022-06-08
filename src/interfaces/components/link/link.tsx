import React from 'react';
import { SLink } from './styled';

export const Link = ({ children, ...props }) => (
    <SLink {...props}>
        {children}
    </SLink>
);
