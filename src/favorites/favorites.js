import { auth, favoritesByUserRef } from '../firebase/firebase.js';
import objectToArray from './object-to-array.js';
import loadCharacterCards from '../templates/character-card.js';
import { loadHeader, loadFooter } from '../templates/banners.js';
import loadUserProfile from '../templates/user-profile.js';

loadHeader();
loadUserProfile();
loadFooter();

auth.onAuthStateChanged(user => {
    const userFavoriteListRef = favoritesByUserRef.child(user.uid);
    userFavoriteListRef.on('value', snapshot => {
        const value = snapshot.val();
        let favoriteList = null;
        if(value) {
            favoriteList = objectToArray(value);
        }
        loadCharacterCards(favoriteList);
    });
});