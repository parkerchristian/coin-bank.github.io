export function makeSelectOptionTemplate(characters) {
    const html = `
        <select>
            <option value="null" selected="selected" disabled="">Select a Character</option>
        </select>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    const select = dom.querySelector('select');
    characters.forEach(character => {
        const option = document.createElement('option');
        option.value = character.id;
        option.textContent = character.name;
        select.appendChild(option);
    });
    return template.content;
}