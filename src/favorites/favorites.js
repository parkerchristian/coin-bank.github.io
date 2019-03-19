import { auth, favoritesByUserRef } from '../firebase/firebase.js';
import objectToArray from './object-to-array.js';
import loadCharacterCards from '../templates/character-card.js';

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