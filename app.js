const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function renderBooks() {
    let renderLibrary = document.querySelector('.library')
    for (let i = 0; i <= myLibrary.length; i++) {
       let eachBook = document.createElement("div");
       eachBook.setAttribute('class', 'book')
       eachBook.innerHTML = `
       <h2 class="bookTitle">${myLibrary[i].title}</h2>
       <p class="bookAuthor">${myLibrary[i].author}</p>
       <p class="bookPages">Pages:${myLibrary[i].pages}</p>
       <button class="btnRead">read</button>
       `;
        renderLibrary.appendChild(eachBook);
    };
};

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let NewBook = new Book(title, author, pages, read);
    myLibrary.push(NewBook); 
}

    // button that for add book form to appear
let addBookbtn = document.querySelector('#new-book-btn');
addBookbtn.addEventListener("click", () => {
      let addBookForm = document.querySelector("#popup-container-inactive");
      addBookForm.setAttribute('id', 'popup-container-active')
});

    // button to close the add book function
let closeAddBookBtn = document.querySelector(".close-btn");
closeAddBookBtn.addEventListener('click', () => {
    let addBookForm = document.querySelector("#popup-container-active");
    addBookForm.setAttribute('id', 'popup-container-inactive');
});

    //function as a button calls in a function that store books into myLibrary
let submitNewBook = document.querySelector('.submitBtn > input');
submitNewBook.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    renderBooks();
})
