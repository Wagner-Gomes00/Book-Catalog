import React, { useState } from 'react';

function BookForm({ onAddBook, editBook, setEditBook }) {
    const [title, setTitle] = useState(editBook ? editBook.title : '');
    const [author, setAuthor] = useState(editBook ? editBook.author : '');
    const [year, setYear] = useState(editBook ? editBook.year : '');
    const [description, setDescription] = useState(editBook ? editBook.description : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author, year, description };

        if (editBook) {
            onAddBook(newBook, editBook.id);
        } else {
            onAddBook(newBook);
        }

        setTitle('');
        setAuthor('');
        setYear('');
        setDescription('');
        setEditBook(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type="text"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">{editBook ? 'Edit Book' : 'Add Book'}</button>
        </form>
    );
}

export default BookForm;
