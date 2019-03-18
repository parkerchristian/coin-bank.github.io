export function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', searchTerm);
    return searchParams.toString();
}

export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const queryOptions = {
        name: searchParams.get('name')
    };
    return queryOptions;
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}