import loadUserProfile from './templates/user-profile.js';
import loadCharacterCards from './templates/character-card.js';
import './query-ui-component/search-component.js';
import { readFromQuery } from './query/query-component.js';
import { makeCharacterUrl } from './api-url/api-url.js';
import './query-ui-component/paging-component.js';
import { loadPaging, updatePaging } from './query-ui-component/paging-component.js';
import { loadHeader, loadFooter } from './templates/banners.js';
import './alpha-buttons/alpha-buttons.js';
import { auth } from './firebase/firebase.js';
import clearContainer from './templates/clear-container.js';

loadHeader();
loadUserProfile();
loadFooter();

auth.onAuthStateChanged(() => {
    loadSearch();
});

window.addEventListener('hashchange', () => {
    loadSearch();
    const pagingContainer = document.getElementById('paging-container');
    pagingContainer.classList.remove('hidden');
});

function loadSearch() {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    const url = makeCharacterUrl(queryOptions);
    fetchAPI(url);
}

const loadingGif = document.getElementById('loading-gif-container');
const heroesUl = document.getElementById('heroes-ul');

function fetchAPI(url) {
    loadingGif.classList.remove('hidden');
    clearContainer(heroesUl);
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            loadingGif.classList.add('hidden');
            
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