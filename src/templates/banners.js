export function makeHeader() {
    const html = `
        <div id="div-header">
            <h1 id="title">Marvel Matches</h1>
            <div id="nav-links-container">
                <a href="./dashboard.html">Home</a>
                <a href="./favorites.html">Favorites</a>
                <a href="./compare.html">Compare Characters</a>
                <a href="./about.html">About Us</a>
            </div>
            <img src="./assets/The_Marvel_Universe_noBackground-2.png">
        </div>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeFooter() {
    const html = `
        <div id="div-footer">
            <img src="./assets/footer copy.jpg" alt="">
            <span>Data provided by Marvel &copy; 2014 Marvel</span>
        </div>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function loadHeader() {
    const headerNode = document.querySelector('header');
    const headerDom = makeHeader();
    headerNode.appendChild(headerDom);
}
export function loadFooter() {
    const footerNode = document.querySelector('footer');
    const footerDom = makeFooter();
    footerNode.appendChild(footerDom);
}