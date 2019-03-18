import loadUserProfile from './templates/user-profile.js';
import loadCharacterCards from './templates/character-card.js';
import './query-ui-component/search-component.js';
import { readFromQuery } from './query/query-component.js';
import { makeCharacterUrl } from './api-url/api-url.js';
import './query-ui-component/paging-component.js';

loadUserProfile();

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    const url = makeCharacterUrl(queryOptions);
    // fetchAPI(url);
});




function fetchAPI(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const characters = data.data.results;
            loadCharacterCards(characters);
        });
}