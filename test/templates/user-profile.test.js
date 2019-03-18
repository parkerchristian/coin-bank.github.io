const test = QUnit.test;

QUnit.module ('MAKE USER PROFILE TEMPLATE');

function makeProfileTemplate(user) {
    const html = `
        <div id="user-display">
            <img src="${user.photoURL}">
            <p>${user.displayName}</p>
            <input type="submit" value="Sign Out">
        </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('dynamic user profile template test', assert => {
    // arrange
    const user = {
        uid: 123456,
        displayName: 'Easton Weston',
        photoURL: 'https://3.bp.blogspot.com/-9YSBBgYjZXo/TnyyoL2zJrI/AAAAAAAAAUs/KOsrbP22J4o/s1600/marvel_officialLogo.jpg'
    };
    const expected = `
        <div id="user-display">
            <img src="https://3.bp.blogspot.com/-9YSBBgYjZXo/TnyyoL2zJrI/AAAAAAAAAUs/KOsrbP22J4o/s1600/marvel_officialLogo.jpg">
            <p>Easton Weston</p>
            <input type="submit" value="Sign Out">
        </div>
    `;
    // act
    const result = makeProfileTemplate(user);
    // assert
    assert.htmlEqual(result, expected);
});
