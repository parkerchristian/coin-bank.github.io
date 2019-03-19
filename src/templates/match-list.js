import clearContainer from './clear-container.js';

export function makeMatchListTemplate(comic) {
    const description = comic.description || 'No description provided.';
    const html = `
        <li>
            <p>${ comic.title }</p>
            <p>${ description }</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadMatchList(comics) {
    const matchList = document.getElementById('match-list');
    clearContainer(matchList);
    comics.forEach(comic => {
        const dom = makeMatchListTemplate(comic);
        matchList.appendChild(dom);
    });
}