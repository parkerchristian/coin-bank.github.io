import { makeCharacterUrl, makeComicsByCharacterUrl } from '../../src/api-url/api-url.js';

const test = QUnit.test;

QUnit.module('API URL');

test('make character search URL', assert => {
    // arrange
    const queryOptions = {
        name: 'squirrel',
        page: 1
    };
    const expected = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=squirrel&offset=0&apikey=23d38bd86abd4d9b4c8a0605bf740b2a';
    // act
    const result = makeCharacterUrl(queryOptions);
    // assert
    assert.equal(result, expected);
});

test('make Comics search url', assert => {
    // arrange
    const characterID = 1010860;
    const expected = 'https://gateway.marvel.com/v1/public/characters/1010860/comics?limit=50&apikey=23d38bd86abd4d9b4c8a0605bf740b2a';
    // act
    const result = makeComicsByCharacterUrl(characterID);
    // assert
    assert.equal(result, expected);
});


