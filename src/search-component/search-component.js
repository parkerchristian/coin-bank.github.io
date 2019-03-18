const searchContainer = document.getElementById('search-container');
const submitButton = document.getElementById('submit-button');
const textInput = document.getElementById('text-input');

submitButton.addEventListener('click', () => {
    const value = textInput.value;
    console.log(value);
});