export const queries = (query: string): Array<any> => {
    return [
        {
            indexName: 'post',
            query,
        },
        {
            indexName: 'team-member',
            query,
        },
        {
            indexName: 'press-release',
            query,
        },
        {
            indexName: 'page',
            query,
        },
        {
            indexName: 'gallery',
            query,
        },
        {
            indexName: 'product',
            query,
        },
        {
            indexName: 'subsidiaries',
            query,
        },
        {
            indexName: 'career',
            query,
        },
    ];
};
