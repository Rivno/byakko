import React from 'react';
import { Layout, Title } from '#interfaces';
import { SList, SListItem } from './styled';

export const Steps = () => (
    <Layout>
        <Title>Steps</Title>
        <div>
            <SList>
                <SListItem><a target="_blank" href="https://github.com/vercel/next.js/tree/canary/examples/cms-prismic" rel="noopener noreferrer">prismic</a></SListItem>
                <SListItem>prismic preview</SListItem>
                <SListItem>icon sidebar + style</SListItem>
                <SListItem>hero</SListItem>
                <SListItem>prismic template</SListItem>
                <SListItem>light mode</SListItem>
                <SListItem>routing config</SListItem>
                <SListItem>github link</SListItem>
                <SListItem>linkedin link</SListItem>
                <SListItem>contact</SListItem>
                <SListItem>stack</SListItem>
                <SListItem>about me</SListItem>
                <SListItem>experiences</SListItem>
                <SListItem>2 - 3 articles</SListItem>
                <SListItem>page transition</SListItem>
                <SListItem>useDebounce - /sophia-react/apps/global-search/src/hooks/useDebounce.js</SListItem>
                <SListItem>infinite scroll - /sophia-react/apps/global-search/src/components/ModalSearch/components/useResultContent.js</SListItem>
                <SListItem><a target="_blank" href="https://nextjs.org/docs/advanced-features/i18n-routing" rel="noopener noreferrer">language</a></SListItem>
                <SListItem>search</SListItem>
                <SListItem>deploy vercel</SListItem>
                <SListItem>ci - test - docker</SListItem>
                <SListItem>deploy azure</SListItem>
                <SListItem>pong</SListItem>
                <SListItem>snake</SListItem>
                <SListItem>space invaders</SListItem>
                <SListItem><a target="_blank" href="https://iron-session-example.vercel.app" rel="noopener noreferrer">iron-session-example</a></SListItem>
            </SList>
        </div>
    </Layout>
);
