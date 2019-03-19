export function makeMatchListTemplate(comic) {
    const html = `
        <li>
            <p>${ comic.title }</p>
            <p>${ comic.description }</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}