/* eslint-disable @next/next/no-document-import-in-page */
import React from 'react';
import { Html, Head } from 'next/document';

export const LayoutHTML = ({ children }) =>(
    <Html lang="fr">
        <Head />
        <body>
            { children }
        </body>
    </Html>
);
