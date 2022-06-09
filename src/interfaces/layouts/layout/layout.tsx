import Head from 'next/head';
import React from 'react';
import { Footer, Sidebar } from '#components';
import { SContainer, SScrollContent, SMain } from './styled';

export const Layout = ({ children }) => (
    <SContainer>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Sidebar />

        <SScrollContent>
            <SMain>
                { children }
            </SMain>

            <Footer />
        </SScrollContent>
    </SContainer>
);