class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  createNode() {
    const node = document.createElement('li');
    node.setAttribute('data-task', true);
    node.innerHTML = `
        <p class="viewBook"><span><span class="book-title">${this.title}</span> by ${this.author}</span><button onclick="display.removeBook(${this.id})">Remove</button></p>
    `;

    return node;
  }
}

export default Book;