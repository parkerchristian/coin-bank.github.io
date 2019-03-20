const API_KEY = '23d38bd86abd4d9b4c8a0605bf740b2a';

export function makeCharacterUrl(queryOptions) {
    const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';
    const url = new URL(BASE_URL);
    url.searchParams.set('nameStartsWith', queryOptions.name);
    const offset = (queryOptions.page - 1) * 20;    
    url.searchParams.set('offset', offset);
    url.searchParams.set('apikey', API_KEY);
    return url.toString();
}

export function makeComicsByCharacterUrl(characterIDs) {
    const BASE_URL = 'https://gateway.marvel.com/v1/public/comics';
    const url = new URL(BASE_URL);
    url.searchParams.set('limit', 50);
    url.searchParams.set('apikey', API_KEY);
    url.searchParams.set('sharedAppearances', characterIDs);
    return url.toString();
}