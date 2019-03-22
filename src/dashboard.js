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

const pagingContainer = document.getElementById('paging-container');

loadHeader();
loadUserProfile();
loadFooter();

auth.onAuthStateChanged(() => {
    loadSearch();
});

window.addEventListener('hashchange', () => {
    loadSearch();
});

function loadSearch() {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    const url = makeCharacterUrl(queryOptions);
    fetchAPI(url);
}

const loadingGif = document.getElementById('loading-gif-container');
const heroesUl = document.getElementById('heroes-ul');
const searchPrompt = document.getElementById('search-prompt');

function fetchAPI(url) {
    clearContainer(heroesUl);
    if(!url) {
        return;
    } 
    loadingGif.classList.remove('hidden');
    pagingContainer.classList.remove('hidden');

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
            if(totalCount > 0) {
                searchPrompt.classList.add('hidden');
                loadPaging(pagingOptions);
                updatePaging(pagingOptions);
                loadCharacterCards(characters);
            } else {
                searchPrompt.classList.remove('hidden');
                pagingContainer.classList.add('hidden');
            }
        });
}