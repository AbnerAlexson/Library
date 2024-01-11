const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    renderBooks();
}

function renderBooks() {
    let library = document.querySelector('.library')
    library.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
       let book = myLibrary[i] 
       let eachBookElement = document.createElement("div");
       eachBookElement.setAttribute('class', 'book')
       eachBookElement.innerHTML = `
       <h2 class="bookTitle">${myLibrary[i].title}</h2>
       <p class="bookAuthor">${myLibrary[i].author}</p>
       <p class="bookPages">Pages:${myLibrary[i].pages}</p>
       <button class="${book.read ? 'btnRead' : 'btnNotRead'}" onclick="toggleRead(${i})">${book.read ? 'Read' : 'Not Read'}</button>
       <button class="removeBook" onclick="removeBook(${i})">Delete</button>
       `;
       library.appendChild(eachBookElement);
    };
};

function removeBook(index) {
    myLibrary.splice(index, 1);
    renderBooks();
}

    // function that add object (books) into myLibrary array
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
});

