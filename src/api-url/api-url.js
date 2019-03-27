const API_KEY = '23d38bd86abd4d9b4c8a0605bf740b2a';
// Parker's Key below
// const API_KEY = '2aef67165d6b6b8f6a107507ce8f06a0';

export function makeCharacterUrl(queryOptions) {
    if(!queryOptions.name) {
        return '';
    }
    const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';
    const url = new URL(BASE_URL);
    url.searchParams.set('nameStartsWith', queryOptions.name);
    const offset = (queryOptions.page - 1) * 20;    
    url.searchParams.set('offset', offset);
    url.searchParams.set('apikey', API_KEY);
    return url.toString();
}

export function makeComicsByCharacterUrl(queryOptions) {
    const BASE_URL = 'https://gateway.marvel.com/v1/public/comics';
    const url = new URL(BASE_URL);
    url.searchParams.set('limit', 50);
    url.searchParams.set('apikey', API_KEY);
    url.searchParams.set('sharedAppearances', queryOptions.characters);
    const offset = (queryOptions.page - 1) * 50;    
    url.searchParams.set('offset', offset);
    return url.toString();
}