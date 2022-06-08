import React from 'react';
import { Card, Description, Grid, Layout, PreTitle, Title } from '#interfaces';
import { STitle } from './styled';

export const Home = ({ page, preview }) => (
    <Layout>
        <PreTitle>{page.pretitle}</PreTitle>
        <STitle>{page.title}</STitle>

        <Description>
            {page.description?.[0]?.text}
        </Description>

        <Grid>
            <Card href="https://nextjs.org/docs" title="Documentation &rarr;">
                <p>Find in-depth information about Next.js features and API.</p>
            </Card>

            <Card href="https://nextjs.org/learn" title="Learn &rarr;">
                <p>Learn about Next.js in an interactive course with quizzes!</p>
            </Card>

            <Card href="https://github.com/vercel/next.js/tree/canary/examples" title="Examples &rarr;">
                <p>Discover and deploy boilerplate example Next.js projects.</p>
            </Card>

            <Card
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                title="Deploy &rarr;"
            >
                <p>
                    Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
            </Card>
        </Grid>
    </Layout>
);
