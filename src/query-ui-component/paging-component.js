import { writePageToQuery } from '../query/query-component.js';

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');


const pagingOptions = {
    currentPage: 1,
    totalPages: 10
};

function updatePaging(pagingOptions) {
    currentPage.textContent = pagingOptions.currentPage;
    previousButton.disabled = pagingOptions.currentPage === 1;
    nextButton.disabled = pagingOptions.currentPage === pagingOptions.totalPages;
    const existingQuery = window.location.hash.slice(1);
    window.location.hash = writePageToQuery(existingQuery, pagingOptions.currentPage);
}

updatePaging(pagingOptions);
loadPaging();

function loadPaging() {
    nextButton.addEventListener('click', () => {
        pagingOptions.currentPage++;
        updatePaging(pagingOptions);
    });
    
    previousButton.addEventListener('click', () => {
        pagingOptions.currentPage--;
        updatePaging(pagingOptions);
    });
}