import loadUserProfile from './templates/user-profile.js';
import loadCharacterCards from './templates/character-card.js';
import './search-component/search-component.js';

loadUserProfile();

const url = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=squirrel&apikey=23d38bd86abd4d9b4c8a0605bf740b2a';

// fetchAPI();

function fetchAPI() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const characters = data.data.results;
            loadCharacterCards(characters);
        });
}