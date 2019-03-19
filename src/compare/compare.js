import { makeSelectOptionTemplate } from '../templates/select-option.js';
import { favoritesByUserRef, auth } from '../firebase/firebase.js';
import objectToArray from '../favorites/object-to-array.js';

const selectOne = document.getElementById('select-one');
const selectTwo = document.getElementById('select-two');

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
            loadSelectOption(selectOne, favoriteList);
            loadSelectOption(selectTwo, favoriteList);
        }
    });
});
