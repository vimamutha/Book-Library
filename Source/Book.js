const bodyParser = require('body-parser');
const {Book} = require('../db/models/Book');
const HttpStatus = require('http-status-codes');



const add = async (req,res) => {

  try {

    const book = new Book({
      name     : req.body.name,
      author   : req.body.author,
      edition  : req.body.edition,
      NumberofBooks : 1,
    });

    const doc = await book.save();
    res
    .status(HttpStatus.CREATED)
    .send(doc);

  } catch (e) {

    res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .send(e)

  };
};


const deletebook = async (req,res) => {

  try {

    const result = await Book.findOneAndDelete({
      name : req.body.name,
    });
    res
    .status(HttpStatus.OK)
    .send(result);

  } catch (e) {

    res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .send("Unable to delete the book" + e)

  };
};


const getbooks = async (req,res) => {

  try {

    const booklist = await Book.find();
    res
    .status(HttpStatus.OK)
    .send(booklist);

  } catch (e) {

    res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .send("Unable to get the books");

  };
};

const getbookByname = async (req,res) => {

  try {
    const book = await Book.findOne(
      {
          name : req.params.name,
      });
    res
    .status(HttpStatus.OK)
    .send(book);
  } catch (e) {
    res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .send("Unable to get the book");
  };
};


const updatebook = async (req,res) => {

  try {

    let book = await Book.findOne({
          name : req.params.name,
    });

    if (!book) {
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send("Cant Find the book");
        return;
    };

    let booksavailable = book.NumberofBooks + req.body.NumberofBooks;

    const updatedetail = await Book.findOneAndUpdate(
      { name : req.body.name},
      { $set : {NumberofBooks:booksavailable}},
      {returnNewDocument:1}
    );

    res
    .status(HttpStatus.OK)
    .send(updatedetail);

  } catch (e) {

    res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .send("Unable to update");

  };

};

module.exports = {
  add,
  deletebook,
  getbooks,
  getbookByname,
  updatebook
};
