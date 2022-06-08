import React, { useState, useCallback } from 'react';
import { Layout, Title } from '#interfaces';

export const Article = () => {
    const [count, setCount] = useState(0);
    const onClick = useCallback(() => setCount((prev) => prev + 1), []);

    return (
        <Layout>
            <Title>Article</Title>
            <button onClick={onClick}>count: {count}</button>
        </Layout>
    );
};
