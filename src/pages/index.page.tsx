import { getHomepage } from 'api/prismic';
import React from 'react';
import { Home } from './home';

const DefaultPage = ({ page, preview }) => (
    <Home page={page} preview={preview} />
);

export async function getStaticProps({ preview = false, previewData, locale }) {
    const page = await getHomepage(previewData, locale)
    return {
        props: { preview, page },
    }
  }

export default DefaultPage;
