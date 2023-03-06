class Book {
  constructor(title, author, id = null) {
    this.title = title;
    this.author = author;
    if (id !== null) {
      this.id = id;
    }
  }

  createNode = () => {
    const bookNode = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = 'Remove';
    bookNode.innerHTML = `
    <span>'${this.title}' by ${this.author}</span> 
    `;
    bookNode.appendChild(btn);

    return { bookNode, btn, index: this.id };
  }
}

export default Book;