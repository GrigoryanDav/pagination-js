const totalItemsSelect = document.getElementById('total-items-select')
const itemsPerPageSelect = document.getElementById('items-per-page-select')
const paginationNumbers = document.querySelector('.pagination-numbers')
const prevButton = document.querySelector('.pagination-btn.prev')
const nextButton = document.querySelector('.pagination-btn.next')


let totalItems = parseInt(totalItemsSelect.value, 10)
let itemsPerPage = parseInt(itemsPerPageSelect.value, 10)
let totalPages = Math.ceil(totalItems / itemsPerPage)
let currentPage = 1


function renderPagination() {
    paginationNumbers.innerHTML = ''

    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('div')
        pageNumber.classList.add('page-number')
        if (i === currentPage) {
            pageNumber.classList.add('active')
        }
        pageNumber.textContent = i
        pageNumber.addEventListener('click', () => goToPage(i))
        paginationNumbers.appendChild(pageNumber)
    }

    prevButton.disabled = currentPage === 1
    nextButton.disabled = currentPage === totalPages
}

function goToPage(page) {
    currentPage = page
    renderPagination()
}

function updatePaginationSettings() {
    totalItems = parseInt(totalItemsSelect.value, 10)
    itemsPerPage = parseInt(itemsPerPageSelect.value, 10)
    totalPages = Math.ceil(totalItems / itemsPerPage)
    currentPage = 1
    renderPagination()
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        goToPage(currentPage - 1)
    }
})

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        goToPage(currentPage + 1)
    }
})

totalItemsSelect.addEventListener('change', updatePaginationSettings)
itemsPerPageSelect.addEventListener('change', updatePaginationSettings)

renderPagination()