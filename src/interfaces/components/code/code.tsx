import React from 'react';
import { SCode } from './styled';

export const Code = ({ children, ...props }) => (
    <SCode {...props}>{children}</SCode>
);
