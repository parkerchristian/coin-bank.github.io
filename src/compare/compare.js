import { makeComicsByCharacterUrl } from '../api-url/api-url.js';
import { makeSelectOptionTemplate } from '../templates/select-option.js';
import { favoritesByUserRef, auth } from '../firebase/firebase.js';
import objectToArray from '../favorites/object-to-array.js';
import loadMatchList from '../templates/match-list.js';

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
    const characterIDs = [characterOne, characterTwo];
    const charactersUrl = makeComicsByCharacterUrl(characterIDs);
    
    fetch(charactersUrl)
        .then(response => response.json())
        .then(data => {
            const results = data.data.results;
            loadMatchList(results);
        });
}); 
