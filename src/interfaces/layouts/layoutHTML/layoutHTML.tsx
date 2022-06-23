/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-document-import-in-page */
import React from 'react';
import { Html, Head } from 'next/document';

export const LayoutHTML = ({ children }) =>(
    <Html lang="fr">
        <Head>
            <script src="/theme-mode.js" />
        </Head>
        <body>
            { children }
        </body>
    </Html>
);
