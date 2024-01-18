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
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", "Completed");
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", "Completed");
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", "Completed");
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", "Completed");
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", "Completed");
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", "Completed");
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", "Completed");

console.log(myLibrary);

for (let i = 0; i < myLibrary.length; i++) {
  // Create new div element to contain all the book information.
  const bookContainer = document.createElement('div');
  bookContainer.className = 'book-container';

  // Title
  const bookTitle = document.createElement('p');
  bookTitle.className = 'book-title'
  bookTitle.textContent = myLibrary[i].title;
  bookContainer.appendChild(bookTitle);

  // Author
  const bookAuthor = document.createElement('p');
  bookAuthor.className = 'book-author'
  bookAuthor.textContent = myLibrary[i].author;
  bookContainer.appendChild(bookAuthor);

  // Completion
  const bookCompletion = document.createElement('p');
  bookCompletion.textContent = myLibrary[i].completion
  bookContainer.appendChild(bookCompletion)

  // Append bookContainer to bookList div in body
  let bookList = document.querySelector('.book-list');
  bookList.appendChild(bookContainer);
}