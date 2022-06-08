import { Icon } from '#icons';
import React from 'react';
import { SFooter } from './styled';

export const Footer = () => (
    <SFooter>
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span>By</span>
            <Icon name="vercel" width='72px' height='16px' />
        </a>
    </SFooter>
);
