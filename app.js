const myLibrary = [];

function Book() {
    // the constructor...
}

function addBookToLibrary() {
    //do stuff here
}

 let addBookbtn = document.querySelector('#new-book-btn');
 addBookbtn.addEventListener("click", () => {
      let addBookForm = document.querySelector("#new-book-form");
      addBookForm.style.display = "block";
})