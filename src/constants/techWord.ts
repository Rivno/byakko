export const TECH_WORD = [
    {
        value: 'reactjs',
        link: 'https://reactjs.org/',
    },
    {
        value: 'nodejs',
        link: 'https://nodejs.org/',
    },
    {
        value: '.net c#',
        link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },
];

export const TECH_WORD_DICT = TECH_WORD.reduce((acc, w) => {
    acc[w.value] = w.link;
    return acc;
}, {});
