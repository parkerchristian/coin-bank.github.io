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

loadHeader();
loadUserProfile();
loadFooter();

const selectOneContainer = document.getElementById('select-one');
const selectTwoContainer = document.getElementById('select-two');
const compareForm = document.getElementById('compare-form');

function loadSelectOption(select, favoriteList) {
    const dom = makeSelectOptionTemplate(favoriteList);
    select.appendChild(dom);
}

auth.onAuthStateChanged(user => {
    const userFavoriteListRef = favoritesByUserRef.child(user.uid);
    userFavoriteListRef.on('value', snapshot => {
        const value = snapshot.val();
        let favoriteList = null;
        if(value) {
            favoriteList = objectToArray(value);
            loadSelectOption(selectOneContainer, favoriteList);
            loadSelectOption(selectTwoContainer, favoriteList);
        }
    });
});

compareForm.addEventListener('submit', event => {
    event.preventDefault();
    const selectOne = selectOneContainer.querySelector('select');
    const selectTwo = selectTwoContainer.querySelector('select');
    const characterOne = selectOne.options[selectOne.selectedIndex].value;
    const characterTwo = selectTwo.options[selectTwo.selectedIndex].value;
    
    // TODO disable compare button
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
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readCompareFromQuery(existingQuery);
    const charactersUrl = makeComicsByCharacterUrl(queryOptions);
    const pagingContainers = document.querySelectorAll('.paging-container');
    pagingContainers.forEach(container => {
        container.classList.remove('hidden');
    });
    fetch(charactersUrl)
        .then(response => response.json())
        .then(data => {
            const results = data.data.results;
            const totalCount = data.data.total;
            const pagingOptions = {
                currentPage: queryOptions.page,
                totalPages: Math.ceil(totalCount / 50)
            };
            loadComparePaging(pagingOptions);
            updatePaging(pagingOptions);
            loadMatchList(results);
        });
});
