import { makeHeader, makeFooter } from '../../src/templates/banners.js';

const test = QUnit.test;

QUnit.module('BANNERS');

test('make header template', assert => {
    //Arrange
    const expected = `
        <div id="div-header">
            <h1 id="title">Marvel Matches</h1>
            <div id="nav-links-container">
                <a href="./dashboard.html">Home</a>
                <a href="./favorites.html">Favorites</a>
                <a href="./compare.html">Compare Characters</a>
                <a href="./about.html">About Us</a>
            </div>
            <img src="./assets/The_Marvel_Universe_noBackground-2.png">
        </div>`;
    //Act
    const result = makeHeader();
    //Assert
    assert.htmlEqual(result, expected);
});

test('make footer template', assert => {
    //Arrange
    const expected = `
        <div id="div-footer">
            <img src="./assets/footer copy.jpg" alt="">
            <span>Data provided by Marvel © 2014 Marvel</span>
        </div>`;
    //Act
    const result = makeFooter();
    //Assert
    assert.htmlEqual(result, expected);
});