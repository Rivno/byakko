import Prismic from 'prismic-javascript';

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.cdn.prismic.io/graphql`;
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
    accessToken: API_TOKEN,
});

async function fetchAPI(query, { previewData, variables }: { previewData?: any; variables?: any; } = {}) {
    const prismicAPI = await PrismicClient.getApi();
    const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
        {
            headers: {
                'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
                'Content-Type': 'application/json',
                'Accept-Language': API_LOCALE,
                Authorization: `Token ${API_TOKEN}`,
            },
        }
    )

    if (res.status !== 200) {
        console.log(await res.text());
        throw new Error('Failed to fetch API');
    }

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}

export async function getHomepage(previewData) {
    const data = await fetchAPI(`
        query {
            homepage(uid: "homepage", lang: "${API_LOCALE}"){
                pretitle
                title
                description
            }
        }`,
        { previewData }
    );

    return data.homepage;
}