export function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const queryOptions = {
        name: searchParams.get('name'),
        page: parseInt(searchParams.get('page'))
    };
    return queryOptions;
}

export function readCompareFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const queryOptions = {
        characters: [parseInt(searchParams.get('char1')), parseInt(searchParams.get('char2'))],
        page: parseInt(searchParams.get('page'))
    };
    return queryOptions;
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function writeCompareToQuery(existingQuery, charactersIDs) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('char1', charactersIDs[0]);
    searchParams.set('char2', charactersIDs[1]);
    searchParams.set('page', 1);
    return searchParams.toString();
}