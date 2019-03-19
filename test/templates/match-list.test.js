import { makeMatchListTemplate } from '../../src/templates/match-list.js';

const test = QUnit.test;

QUnit.module('MATCH LIST TEST');

test('make match list template', assert => {
    //Arrange
    const expected = `
        <li>
            <p>Title</p>
            <p>Description</p>
        </li>
    `;
    const comic = {
        title: 'Title',
        description: 'Description'
    };
    //Act
    const result = makeMatchListTemplate(comic);
    //Assert
    assert.htmlEqual(result, expected);
});