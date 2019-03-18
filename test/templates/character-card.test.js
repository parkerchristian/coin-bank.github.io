import { makeCharacterCard } from '../../src/templates/character-card.js';

const test = QUnit.test;

QUnit.module('CHARACTER CARD');

test('make character card template', assert => {
    // arrange
    const character = {
        thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/60/4c0035beb0c55',
            extension: 'jpg'
        },
        name: 'Squirrel Girl'
    };

    const expected = `
        <li>
            <img src="http://i.annihil.us/u/prod/marvel/i/mg/8/60/4c0035beb0c55.jpg">
            <p>Squirrel Girl</p>
        </li>
    `;
    // act
    const result = makeCharacterCard(character); 
    // assert
    assert.htmlEqual(result, expected);
});


