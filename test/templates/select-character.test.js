import { makeSelectOptionTemplate } from '../../src/templates/select-option.js';

const test = QUnit.test;

QUnit.module('SELECT CHARACTER');

test('make select options template', assert => {
    //arrange
    const expected = `
        <select> <option value="null" selected="selected" disabled="">Select a Character</option> <option value="1">Squirrel Girl</option><option value="2">Spider Man</option><option value="3">Hulk</option><option value="4">Thor</option><option value="5">Wolfie</option><option value="6">Guy</option></select>
    `;

    const characters = [
        { id: 1, name: 'Squirrel Girl' },
        { id: 2, name: 'Spider Man' },
        { id: 3, name: 'Hulk' },
        { id: 4, name: 'Thor' },
        { id: 5, name: 'Wolfie' },
        { id: 6, name: 'Guy' }
    ];
    //act
    const result = makeSelectOptionTemplate(characters);
    //assert
   
    assert.htmlEqual(result, expected);
});