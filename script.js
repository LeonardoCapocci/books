// Empty Book Library
myLibrary = [];

// Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add books to the library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  updateScreen();
}
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", 800, true);

// Update Screen
function updateScreen() {
  const bookContainer = document.createElement('div');
  bookContainer.className = 'book-container'

  // Title
  const bookTitle = document.createElement('p');
  bookTitle.className = 'book-title';
  bookTitle.textContent = myLibrary[myLibrary.length -1].title;
  bookContainer.appendChild(bookTitle)

  // Author
  const bookAuthor = document.createElement('p');
  bookAuthor.className = 'book-author';
  bookAuthor.textContent = myLibrary[myLibrary.length -1].author;
  bookContainer.appendChild(bookAuthor);

  // Pages
  const bookPages = document.createElement('p');
  bookPages.className = 'book-pages';
  bookPages.textContent = myLibrary[myLibrary.length -1].pages;
  bookPages.textContent += " pages"
  bookContainer.appendChild(bookPages);

  // Read?
  const bookRead = document.createElement('p');
  bookRead.className = 'book-read'
  bookRead.textContent = myLibrary[myLibrary.length -1].read ? "Read" : "Not Read"
  bookContainer.appendChild(bookRead)

  const bookList = document.querySelector('.book-list')
  bookList.appendChild(bookContainer)
}

// Change read status


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
form.addEventListener('submit', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('is-read').checked;

  addBookToLibrary(title, author, pages, read)
})