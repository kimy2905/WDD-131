const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description:
            'If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description:
            'The anticipated new novel by Rick Riordan, exploring Norse mythology.',
        imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    }
];

const articlesSection = document.querySelector('.articles');

articles.forEach(article => {
    const articleElement = document.createElement('article');
    articleElement.innerHTML = `
        <div class="article-details-box">
            <span>${article.date}</span>
            <span>Ages: ${article.ages}</span>
            <span>Genre: ${article.genre}</span>
            <span>Rating: ${article.stars}</span>
        </div>
        <div></div> <!-- Vertical separator -->
        <div class="article-content">
            <h2>${article.title}</h2>
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <p>${article.description}</p>
        </div>
    `;
    articlesSection.appendChild(articleElement);
});
