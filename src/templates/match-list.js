import clearContainer from './clear-container.js';

export function makeMatchListTemplate(comic) {
    const description = comic.description || 'No description provided.';
    const html = `
        <li>
            <a href="${ comic.urls[0].url }"><img src="${ comic.thumbnail.path }.${ comic.thumbnail.extension }"></a>
            <div class="comic-details"> 
            <p><a href="${ comic.urls[0].url }">${ comic.title }</a></p>
            <p>${ description }</p>
            </div>
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