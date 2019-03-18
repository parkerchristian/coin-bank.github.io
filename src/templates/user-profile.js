export function makeProfileTemplate(user) {
    const image = user.photoURL || '../../assets/avatar.png';
    const html = `
        <div id="user-display">
            <img src="${image}">
            <p>${user.displayName}</p>
            <input type="submit" value="Sign Out">
        </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}