const express = require('express');
const books =  require('../Source/Book.js');
const addRoutes = (app) => {
    console.log('indise the addroutle');
    app.post('/book',books.add);
    app.get('/book/',books.getbooks);
    app.get('/book/:name',books.getbookByname);
    app.patch('/book/:name',books.updatebook);
    app.delete('/book',books.deletebook);
    return app;
};

module.exports = {addRoutes};
