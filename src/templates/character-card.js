import { favoritesByUserRef, auth } from '../firebase/firebase.js';
import clearContainer from './clear-container.js';

export function makeCharacterCard(character) {
    const html = `
        <li>
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}">
            <a href="${ character.urls[0].url }"><p>${character.name}</p></a>
            <p>Total Comics: ${ character.hasOwnProperty('totalComics') ? character.totalComics : character.comics.available }</p>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadCharacterCards(characters) {
    const heroesUL = document.getElementById('heroes-ul');
    clearContainer(heroesUL);
    if(!characters) {
        return;
    }
    characters.forEach(character => {
        const dom = makeCharacterCard(character);
        const image = dom.querySelector('img');
        const li = dom.querySelector('li');
        const userId = auth.currentUser.uid;
        const userFavoriteListRef = favoritesByUserRef.child(userId);
        const userFavoriteCharacterRef = userFavoriteListRef.child(character.id);

        userFavoriteCharacterRef.on('value', snapshot =>{
            const value = snapshot.val();
            if(value){
                li.classList.add('favorite');
            } else {
                li.classList.remove('favorite');
            }
        });

        image.addEventListener('click', () => {
            if(li.classList.contains('favorite')) {
                li.classList.remove('favorite');
                userFavoriteCharacterRef.remove();
            } else {
                li.classList.add('favorite');
                userFavoriteCharacterRef.set({
                    id: character.id,
                    name: character.name,
                    thumbnail: character.thumbnail,
                    urls: character.urls,
                    totalComics: character.comics.available
                });
            }
        });
        heroesUL.appendChild(dom);
    });
}