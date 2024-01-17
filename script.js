const myLibrary = [];

function Book(title, author, completion) {
  this.title = title;
  this.author = author;
  this.completion = completion;
  }

function addBookToLibrary(title, author, completion) {
  const newBook = new Book(title, author, completion);
  myLibrary.push(newBook);
}

addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", "Completed");

console.log(myLibrary);

for (let i = 0; i < myLibrary.length; i++) {
  // Create new div element to contain all the book information.
  const bookContainer = document.createElement('div');
  bookContainer.className = 'bookContainer';

  // Title
  const bookTitle = document.createElement('p');
  bookTitle.textContent = myLibrary[i].title;
  bookContainer.appendChild(bookTitle)

  // Append bookContainer to bookList div in body
  let bookList = document.querySelector('.book-list');
  bookList.appendChild(bookContainer);
}