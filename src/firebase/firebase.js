var config = {
    apiKey: 'AIzaSyBIsNQ94S4OQwIsvsyxw-2KEyBjcPenDEc',
    authDomain: 'marvel-matches.firebaseapp.com',
    databaseURL: 'https://marvel-matches.firebaseio.com',
    projectId: 'marvel-matches',
    storageBucket: '',
    messagingSenderId: '905649096519'
};

export const app = firebase.initializeApp(config);
export const auth = firebase.auth();
const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesByUserRef = db.ref('favorites-by-user');