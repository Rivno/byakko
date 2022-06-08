import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '#design';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
);

export default MyApp;
