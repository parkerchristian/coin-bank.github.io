import { makeMatchListTemplate } from '../../src/templates/match-list.js';

const test = QUnit.test;

QUnit.module('MATCH LIST TEST');

test('make match list template', assert => {
    //Arrange
    const expected = `
        <li>
            <a href="google.com"><img src="words.jpg"></a> 
            <div class="comic-details">
            <p><a href="google.com">Title</a></p> 
            <p>Description</p>
            </div>
        </li>
    `;
    const comic = {
        urls: [{ url: 'google.com' }],
        thumbnail: { path: 'words', extension: 'jpg' },
        title: 'Title',
        description: 'Description'
    };
    //Act
    const result = makeMatchListTemplate(comic);
    //Assert
    assert.htmlEqual(result, expected);
});