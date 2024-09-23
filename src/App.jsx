import './App.css'
import React, { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) setBooks(storedBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (newBook, editId = null) => {
    if (editId !== null) {
      setBooks(books.map((book, index) =>
        index === editId ? newBook : book
      ));
    } else {
      setBooks([...books, newBook]);
    }
  };

  const deleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const editBookHandler = (book, index) => {
    setEditBook({ ...book, id: index });
  };

  return (
    <div className="App">
      <h1>Book Catalog</h1>
      <BookForm onAddBook={addBook} editBook={editBook} setEditBook={setEditBook} />
      <BookList books={books} onDeleteBook={deleteBook} onEditBook={editBookHandler} />
    </div>
  );
}

export default App;


