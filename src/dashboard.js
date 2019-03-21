import loadUserProfile from './templates/user-profile.js';
import loadCharacterCards from './templates/character-card.js';
import './query-ui-component/search-component.js';
import { readFromQuery } from './query/query-component.js';
import { makeCharacterUrl } from './api-url/api-url.js';
import './query-ui-component/paging-component.js';
import { loadPaging, updatePaging } from './query-ui-component/paging-component.js';
import { loadHeader, loadFooter } from './templates/banners.js';


loadHeader();
loadUserProfile();
loadFooter();

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    const url = makeCharacterUrl(queryOptions);
    const pagingContainer = document.getElementById('paging-container');
    pagingContainer.classList.remove('hidden');
    fetchAPI(url);
});

function fetchAPI(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const characters = data.data.results;
            const totalCount = data.data.total;
            const offset = data.data.offset;
            const pagingOptions = {
                currentPage: Math.floor(offset / 20) + 1,
                totalPages: Math.ceil(totalCount / 20)
            };
            loadPaging(pagingOptions);
            updatePaging(pagingOptions);
            loadCharacterCards(characters);
        });
}