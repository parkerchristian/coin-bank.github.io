import { updateQuery } from '../query-ui-component/paging-component.js';

const previousButtons = document.querySelectorAll('.previous-button');
const nextButtons = document.querySelectorAll('.next-button');
const currentPageSpans = document.querySelectorAll('.current-page');
const totalPageSpans = document.querySelectorAll('.total-pages');


export function updatePaging(pagingOptions) {
    currentPageSpans.forEach(span => {
        span.textContent = pagingOptions.currentPage; 
    });
    totalPageSpans.forEach(span => {
        span.textContent = pagingOptions.totalPages;
    });
    previousButtons.forEach(button => {
        button.disabled = pagingOptions.currentPage === 1;
    });
    nextButtons.forEach(button => {
        button.disabled = pagingOptions.currentPage === pagingOptions.totalPages;
    });
}

export function loadComparePaging(pagingOptions) {
    previousButtons.forEach(button => {
        button.addEventListener('click', () => {
            pagingOptions.currentPage--;
            updateQuery(pagingOptions);
        });
    });
    
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            pagingOptions.currentPage++;
            updateQuery(pagingOptions);
        });
    });
}