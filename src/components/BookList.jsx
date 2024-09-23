import React from 'react';

function BookList({ books, onDeleteBook, onEditBook }) {
    return (
        <ul>
            {books.map((book, index) => (
                <li key={index}>
                    <h2>{book.title}</h2>
                    <p>Author: {book.author}</p>
                    <p>Year: {book.year}</p>
                    <p>{book.description}</p>
                    <button onClick={() => onEditBook(book, index)}>Edit</button>
                    <button onClick={() => onDeleteBook(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default BookList;
