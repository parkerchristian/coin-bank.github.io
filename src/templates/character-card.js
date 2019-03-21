import { favoritesByUserRef, auth } from '../firebase/firebase.js';
import clearContainer from './clear-container.js';

export function makeCharacterCard(character) {
    const html = `
        <li>
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}">
            <a href="${ character.urls[0].url }"><p>${character.name}</p></a>
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
        const userId = auth.currentUser.uid;
        const userFavoriteListRef = favoritesByUserRef.child(userId);
        const userFavoriteCharacterRef = userFavoriteListRef.child(character.id);

        userFavoriteCharacterRef.on('value', snapshot =>{
            const value = snapshot.val();
            if(value){
                image.classList.add('favorite');
            } else {
                image.classList.remove('favorite');
            }
        });

        image.addEventListener('click', () => {
            if(image.classList.contains('favorite')) {
                image.classList.remove('favorite');
                userFavoriteCharacterRef.remove();
            } else {
                image.classList.add('favorite');
                userFavoriteCharacterRef.set({
                    id: character.id,
                    name: character.name,
                    thumbnail: character.thumbnail
                });
            }
        });
        heroesUL.appendChild(dom);
    });
}