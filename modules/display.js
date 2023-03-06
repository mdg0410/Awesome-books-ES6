import Book from './Book.js';
import BookForm from './bookForm.js';

export class Display {
  books = [];

  workForm = ''

  constructor() {
    if (localStorage.getItem('book')) {
      this.books = JSON.parse(localStorage.getItem('book')).map((book) => new Book(book.title, book.author, book.id));
    }
    this.setCurrentForm();
  }

  setCurrentForm = (name = 'bookForm') => {
    this.workForm = new BookForm(name);
    this.workForm.form.onsubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line max-len
    this.addBook(this.workForm.form.title.value, this.workForm.form.author.value, this.books.length);
    this.workForm.form.reset();
  }

  addBook = (title, author, index) => {
    if (index !== 0) { index = this.books[index - 1].id + 1; } else { index = 1; }
    const book = new Book(title, author, index);
    this.books.push(book);
    this.render();
    this.saveBooks();
  }

  removeBook = (id) => {
    this.books = this.books.filter((book) => book.id !== id);
    this.render();
    this.saveBooks();
  }

  render = () => {
    const booksContainer = document.getElementById('books-cont');
    booksContainer.innerHTML = '';
    if (this.books.length === 0) {
      booksContainer.innerHTML = '<h3>There are no books.</h3>';
    } else {
      this.books.forEach((book) => {
        const { bookNode, btn, index } = book.createNode();
        booksContainer.append(bookNode);
        btn.onclick = () => this.removeBook(index);
      });
    }
  }

  saveBooks = () => {
    localStorage.setItem('book', JSON.stringify(this.books));
  }
}

export default new Display();
