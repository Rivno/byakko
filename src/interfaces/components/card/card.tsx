import React from 'react';
import { SCard } from './styled';

export const Card = ({ href, title, children, ...props }) => (
    <SCard href={href} {...props}>
        <h2>{title}</h2>
        <div>{children}</div>
    </SCard>
);
