// Select elements
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

// Load books from localStorage when page loads
document.addEventListener('DOMContentLoaded', loadBooks);

// Handle form submission
bookForm.addEventListener('submit', addBook);

// Functions
function addBook(e) {
  e.preventDefault(); // Stop page from refreshing

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title && author) {
    const book = { title, author };
    addBookToList(book);
    saveBook(book);
    bookForm.reset(); // Clear the form
  }
}

function addBookToList(book) {
  const li = document.createElement('li');
  li.textContent = `${book.title} by ${book.author}`;
  bookList.appendChild(li);
}

function saveBook(book) {
  let books = getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

function getBooks() {
  const books = localStorage.getItem('books');
  return books ? JSON.parse(books) : [];
}

function loadBooks() {
  const books = getBooks();
  books.forEach(addBookToList);
}
//Success Message
function showMessage(text) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = text;
  messageDiv.style.opacity = '1'; // Make it fully visible

  setTimeout(() => {
    messageDiv.style.opacity = '0'; // Start fading out
  }, 2000); // After 2 seconds
}
// Select the clear button
const clearButton = document.getElementById('clear-books');

// Listen for click on clear button
clearButton.addEventListener('click', clearBooks);

// Clear all books function
function clearBooks() {
  // Remove all <li> elements from the list
  while (bookList.firstChild) {
    bookList.removeChild(bookList.firstChild);
  }

  // Clear all books from localStorage
  localStorage.removeItem('books');

  // Show success message
  showMessage('🗑️ All books cleared!');
}


/*
// Clear books from localStorage and UI
function clearBooks() {
  localStorage.removeItem('books');
  bookList.innerHTML = '';
  showMessage('All books cleared!');
}
// Clear books button
const clearButton = document.getElementById('clear-books');
clearButton.addEventListener('click', clearBooks);
// Show message when books are cleared
function showMessage(text) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = text;
  messageDiv.style.display = 'block';

  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 2000); // Hide after 2 seconds
}
  */
