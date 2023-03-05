import Book from './books.js';
import BookForm from './bookForm.js';

class Display {
  books = [];

  workForm = ''

  booksContainer = document.getElementById('containerBooks');

  constructor() {
    if (localStorage.getItem('book')) {
      this.books = JSON.parse(localStorage.getItem('book')).map((book) => new Book(book.title, book.author, book.id));
    }

    this.setCurrentForm();
  }

  setCurrentForm(name = 'addBook', index = this.books.length + 1) {
    this.workForm = new BookForm(name, index);
    this.workForm.form.onsubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

  }


  addBook(newBook) {
    this.books.push(newBook);
    this.render();
    this.saveBooks();
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.render();
    this.saveBooks();
  }

  render() {
    this.booksContainer.querySelectorAll('[data-task]').forEach((book) => book.removeBook());

    if (this.books.length === 0) {
      this.booksContainer.innerHTML = '<h3>There are no books.</h3>';
      return;
    }
    
    this.
  }

  saveBooks() {
    localStorage.setItem('book', JSON.stringify(this.books));
  }
}

export default Display;