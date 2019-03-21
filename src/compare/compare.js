import { makeComicsByCharacterUrl } from '../api-url/api-url.js';
import { makeSelectOptionTemplate } from '../templates/select-option.js';
import { favoritesByUserRef, auth } from '../firebase/firebase.js';
import objectToArray from '../favorites/object-to-array.js';
import loadMatchList from '../templates/match-list.js';
import './paging.js';
import { writeCompareToQuery, readCompareFromQuery } from '../query/query-component.js';
import { updatePaging, loadComparePaging } from './paging.js';
import { loadFooter, loadHeader } from '../templates/banners.js';
import loadUserProfile from '../templates/user-profile.js';
import clearContainer from '../templates/clear-container.js';

loadHeader();
loadUserProfile();
loadFooter();

const selectOneContainer = document.getElementById('select-one');
const selectTwoContainer = document.getElementById('select-two');
const compareForm = document.getElementById('compare-form');
const submitButton = document.getElementById('submit-button');
const matchList = document.getElementById('match-list');

function loadSelectOption(select, favoriteList) {
    const dom = makeSelectOptionTemplate(favoriteList);
    select.appendChild(dom);
}

auth.onAuthStateChanged(user => {
    const userFavoriteListRef = favoritesByUserRef.child(user.uid);
    userFavoriteListRef.on('value', snapshot => {
        const comparePrompt = document.getElementById('compare-prompt');
        
        const value = snapshot.val();
        let favoriteList = null;
        if(value) {
            favoriteList = objectToArray(value);
            if(favoriteList.length < 2) {
                comparePrompt.classList.remove('hidden');
            }
            else {
                submitButton.classList.remove('hidden');
                loadSelectOption(selectOneContainer, favoriteList);
                loadSelectOption(selectTwoContainer, favoriteList);
                loadSelectEventListeners();
            }
        }
        else {
            comparePrompt.classList.remove('hidden');
        }
    });
});

function loadSelectEventListeners() {
    const selects = document.querySelectorAll('select');
    const submitButton = document.getElementById('submit-button');
    selects.forEach(select => {
        select.addEventListener('change', () => {
            if(selects[0].options[selects[0].selectedIndex].value !== 'null' && selects[1].options[selects[1].selectedIndex].value !== 'null') {
                submitButton.disabled = false;
            }
        });
    });
}

compareForm.addEventListener('submit', event => {
    event.preventDefault();
    const selectOne = selectOneContainer.querySelector('select');
    const selectTwo = selectTwoContainer.querySelector('select');
    const characterOne = selectOne.options[selectOne.selectedIndex].value;
    const characterTwo = selectTwo.options[selectTwo.selectedIndex].value;
    
    
    if((!characterOne) || (!characterTwo)) {
        return;
    } 
    // DO IT

    const characterIDs = [characterOne, characterTwo];
    
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeCompareToQuery(existingQuery, characterIDs);
    
    window.location.hash = newQuery;
}); 

window.addEventListener('hashchange', () => {
    const emptySearchPrompt = document.getElementById('empty-search-prompt');
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readCompareFromQuery(existingQuery);
    const charactersUrl = makeComicsByCharacterUrl(queryOptions);
    const pagingContainers = document.querySelectorAll('.paging-container');
    const loadingGifContainer = document.getElementById('loading-gif-container');
    loadingGifContainer.classList.remove('hidden');
    clearContainer(matchList);

    fetch(charactersUrl)
        .then(response => response.json())
        .then(data => {
            loadingGifContainer.classList.add('hidden');
            const results = data.data.results;
            const totalCount = data.data.total;
            const pagingOptions = {
                currentPage: queryOptions.page,
                totalPages: Math.ceil(totalCount / 50)
            };
            if(totalCount > 0) {
                emptySearchPrompt.classList.add('hidden');
                loadComparePaging(pagingOptions);
                updatePaging(pagingOptions);
                loadMatchList(results);
                pagingContainers.forEach(container => {
                    container.classList.remove('hidden');
                });
            } else {
                emptySearchPrompt.classList.remove('hidden');

            }
        });
});
