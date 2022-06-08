import Image from 'next/image';
import React from 'react';
import { Layout, Title } from '#interfaces';

export const Design = () => (
    <Layout>
        <Title>Design</Title>
        <Image src="/design.png" alt="VSCODE" width="508" height="511" />
    </Layout>
);
