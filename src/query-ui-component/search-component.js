import { writeSearchToQuery } from '../query/query-component.js';

const searchForm = document.getElementById('search-form');
// const submitButton = document.getElementById('submit-button');
const textInput = document.getElementById('text-input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const value = textInput.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, value);
    window.location.hash = newQuery;
});