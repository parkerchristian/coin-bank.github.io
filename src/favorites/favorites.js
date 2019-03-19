import { auth, favoritesByUserRef } from '../firebase/firebase.js';


auth.onAuthStateChanged(user => {
    const userFavoriteListRef = favoritesByUserRef.child(user.uid);
    userFavoriteListRef.on('value', snapshot => {
        const value = snapshot.val();
        console.log('yo', value);
        // const favoriteList = objectToArray(value);
    });
});