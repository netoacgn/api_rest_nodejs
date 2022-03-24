const express = require('express');
const PORT = 5000;

// Database fictício
let books = [];


// App propriamente dito
const app = express();


app.use(express.json());

app.post('/books', (req, res) => {
    const { id, title, author, publishedAt } = req.body;
    const book = { id, title, author, publishedAt };
    books.push(book);
    return res.status(201).json(book);
});

app.get('/books', (req, res) => {
    const allBooks = books;
    return res.status(200).json(allBooks);
});

app.get('/books/:book_id', (req, res) => {
    const { book_id } = req.params;
    const book = books.find((book) => book.id === book_id);
    if (!book) { return res.status(404).json('Livro não encontrado') };
    return res.status(200).json(book);
});

app.delete('/books/:book_id', (req, res) => {
    const { book_id } = req.params;
    const filteredBooks = books.filter((book) => book.id !== book_id);
    books = filteredBooks;
    return res.status(204).json('Livro apagado com sucesso');
});

app.patch('/books/:book_id', (req, res) => {
    const { title, author, publishedAt } = req.body;
    const { book_id } = req.params;
    const book = books.find((book) => book.id === book_id);
    book.id = book.id;
    book.title = title ? title : book.title;
    book.author = author ? author : book.author;
    book.publishedAt = publishedAt ? publishedAt : book.publishedAt;
    return res.status(200).json(book);
})


// Server rodando
app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
