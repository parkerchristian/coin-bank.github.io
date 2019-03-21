import { writeSearchToQuery } from '../query/query-component.js';

const alphaButtonDiv = document.getElementById('alpha-button-div');

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

alphabet.forEach(letter => {
    const button = document.createElement('input');
    button.type = 'submit';
    button.value = letter;

    button.addEventListener('click', () => {
        const existingQuery = window.location.hash.slice(1);
        const newQuery = writeSearchToQuery(existingQuery, letter);
        window.location.hash = newQuery;
    });

    alphaButtonDiv.appendChild(button);
});