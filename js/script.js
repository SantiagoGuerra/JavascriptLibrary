function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isReaded = false;
}

const createTableRow = book => {
  const row = document.createElement('tr');

  const dataRow = `
  <td>${book.name}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td>${book.isReaded}</td>
  <td></td>
  `;

  row.insertAdjacentHTML('beforeend', dataRow);

  return row;
};

class MyLibrary {
  constructor(array) {
    this.books = array;
  }
  render() {
    const table = document.getElementById('table');
    this.books.forEach(book => {
      table.appendChild(createTableRow(book))
    })
  }
  insert(book){
    this.books.push(book)
  }
  remove(){
    
  }
}

const myLibrary = new MyLibrary([
  new Book('Name Book 1', 'Author Name', 434),
  new Book('Name Book 2', 'Author Name', 434), 
  new Book('Name Book 3', 'Author Name', 434)]);

myLibrary.insert(
  new Book('Name Book 4', 'Author Name', 434)
)

//myLibrary.delete('Name Book 1')



myLibrary.render()




/*
  myLibrary tenga: 
  propiedades
    books: array
  metodos
    show() -> Agregue a la tabla todos los elementos del array
*/

