import Head from 'next/head';
import React from 'react';
import { Footer, FrontContextSettings, PreviewAlert, Sidebar } from '#components';
import { SContainer, SScrollContent, SMain } from './styled';

export const Layout = ({ preview = false, children }) => (
    <SContainer>
        <Head>
            <title>Allan Bienne - Freelance developer</title>
            <meta name="description" content="Fullstack developer portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Sidebar />

        <PreviewAlert preview={preview} />

        <FrontContextSettings />

        <SScrollContent>
            <SMain>
                { children }
            </SMain>

            <Footer />
        </SScrollContent>
    </SContainer>
);
