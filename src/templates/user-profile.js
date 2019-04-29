import { auth } from '../firebase/firebase.js';

export function makeProfileTemplate(user) {
    const image = user.photoURL || '../../assets/avatar.png';
    const html = `
        <div id="user-display">
            <img src="${image}">
            <p>${user.displayName}</p>
            <button>Sign Out</button>
        </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const profileDisplayContainer = document.getElementById('profile-display-container');

export default function loadUserProfile() {
    auth.onAuthStateChanged(user => {
        if(user) {
            const dom = makeProfileTemplate(user);
            const signOutButton = dom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
                window.location = './index.html';
            });
            profileDisplayContainer.appendChild(dom);
        } else {
            window.location = './index.html';
        }
    });
}
