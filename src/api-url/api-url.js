export function makeCharacterUrl(queryOptions) {
    const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';
    const API_KEY = '23d38bd86abd4d9b4c8a0605bf740b2a';
    const url = new URL(BASE_URL);
    url.searchParams.set('nameStartsWith', queryOptions.name);
    const offset = (queryOptions.page - 1) * 20;    
    url.searchParams.set('offset', offset);
    url.searchParams.set('apikey', API_KEY);
    return url.toString();
}