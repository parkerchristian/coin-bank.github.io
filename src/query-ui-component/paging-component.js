const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

const queryOptions = {
    currentPage: 1,
    totalPages: 10
};



nextButton.addEventListener('click', () => {
    queryOptions.currentPage++;
    currentPage.textContent = queryOptions.currentPage;
});

previousButton.addEventListener('click', () => {
    queryOptions.currentPage--;
    currentPage.textContent = queryOptions.currentPage;
});


