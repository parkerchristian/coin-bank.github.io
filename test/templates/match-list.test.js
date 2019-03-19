const test = QUnit.test;

QUnit.module('MATCH LIST TEST');

function makeMatchListTemplate(comic) {
    const html = `
        <li>
            <p>${ comic.title }</p>
            <p>${ comic.description }</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

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