// Empty Book Library
class Library {
  constructor() {
    this.books = []
  }
  // Function to add books to the library
  addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    this.books.push(newBook);
    this.updateScreen();
  }

  // Update Screen
  updateScreen() {
    const bookContainer = document.createElement('div');
    bookContainer.className = 'book-container'

    // To access latest added book
    const latestBook = this.books[this.books.length - 1];

    // Title
    const bookTitle = document.createElement('p');
    bookTitle.className = 'book-title';
    bookTitle.textContent = latestBook.title;
    bookContainer.appendChild(bookTitle)

    // Author
    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'book-author';
    bookAuthor.textContent = latestBook.author;
    bookContainer.appendChild(bookAuthor);

    // Pages
    const bookPages = document.createElement('p');
    bookPages.className = 'book-pages';
    bookPages.textContent = latestBook.pages;
    bookPages.textContent += " pages";
    bookContainer.appendChild(bookPages);

    // Read?
    const bookRead = document.createElement('button');
    bookRead.className = 'book-read';
    bookRead.textContent = latestBook.read ? "Read" : "Not Read";
    bookContainer.appendChild(bookRead);

    // Apply class based on read status
    if (latestBook.read) {
      bookRead.classList.add('read-book');
    }

    // Remove book button
    const bookRemove = document.createElement('button');
    bookRemove.className = 'book-remove';
    bookRemove.textContent = "Remove Book";
    bookContainer.appendChild(bookRemove);

    // Add book container to booklist
    const bookList = document.querySelector('.book-list');
    bookList.appendChild(bookContainer);
  }
}

// Change read status
const bookList = document.querySelector('.book-list');
bookList.addEventListener('click', function (event) {
  const clickedElement = event.target;
  const bookRead = clickedElement.closest('.book-read');

  if (bookRead) {
    if (bookRead.classList.contains('read-book')) {
      bookRead.classList.remove('read-book');
      bookRead.textContent = "Not Read";
    }
    else {
      bookRead.classList.add('read-book');
      bookRead.textContent = "Read";
    }
  }
})


// Remove book
bookList.addEventListener('click', function (event) {
  const clickedElement = event.target;
  const bookRemove = clickedElement.closest('.book-remove');
  if (bookRemove) {
    const bookContainer = bookRemove.closest('.book-container');
    bookList.removeChild(bookContainer);
    }
})

// Book Constructor
class Book {
  constructor(
    title = 'Unknown',
    author = 'Unkown',
    pages = 0,
    read = false,
  ) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  }
}



// Modal Settings
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.book-btn');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', () => {
  modal.showModal();
})

closeModal.addEventListener('click', () => {
  modal.close();
})


// Apply form submission to add book to library
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('is-read').checked;

  library.addBookToLibrary(title, author, pages, read);

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('is-read').checked = false;
})

library = new Library();
library.addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", 662, true);