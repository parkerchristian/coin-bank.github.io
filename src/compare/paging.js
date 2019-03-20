const previousButtons = document.querySelectorAll('.previous-button');
const nextButtons = document.querySelectorAll('.next-button');
const currentPageSpans = document.querySelectorAll('.current-page');
const totalPageSpans = document.querySelectorAll('.total-pages');


const pagingOptions = {
    currentPage: 1,
    totalPages: 10
};

function updatePaging(pagingOptions) {
    currentPageSpans.forEach(span => {
        span.textContent = pagingOptions.currentPage; 
    });
}

previousButtons.forEach(button => {
    button.addEventListener('click', () => {
        pagingOptions.currentPage--;
        updatePaging(pagingOptions);
    });
});

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        pagingOptions.currentPage++;
        updatePaging(pagingOptions);
    });
});