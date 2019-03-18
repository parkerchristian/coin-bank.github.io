import loadUserProfile from './templates/user-profile.js';


loadUserProfile();

const url = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=dark&apikey=23d38bd86abd4d9b4c8a0605bf740b2a';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const characters = data.data.results;
        console.log(characters);
    });