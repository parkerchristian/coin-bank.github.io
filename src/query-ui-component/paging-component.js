import { writePageToQuery } from '../query/query-component.js';

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

export function updatePaging(pagingOptions) {
    currentPage.textContent = pagingOptions.currentPage;
    totalPages.textContent = pagingOptions.totalPages || 1;
    previousButton.disabled = pagingOptions.currentPage === 1;
    nextButton.disabled = pagingOptions.currentPage === pagingOptions.totalPages;
}

function updateQuery(pagingOptions) {
    const existingQuery = window.location.hash.slice(1);
    window.location.hash = writePageToQuery(existingQuery, pagingOptions.currentPage);

}

export function loadPaging(pagingOptions) {
    nextButton.addEventListener('click', () => {
        pagingOptions.currentPage++;
        updateQuery(pagingOptions);
    });
    
    previousButton.addEventListener('click', () => {
        pagingOptions.currentPage--;
        updateQuery(pagingOptions);
    });
}