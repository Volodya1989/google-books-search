import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  //books from google search
  getBooks: (query) => {
    return axios.get(`${URL}${query}`);
  },
  //Should return all saved books
  getAllBooks: () => {
    return axios.get("/api/books");
  },

  //  Will be used to save a new book to the database.
  saveOneBook: (svBooks) => {
    return axios.post("/api/books", svBooks);
  },

  //Will be used to delete a book from the database by Mongo `_id`.
  deleteBook: (id) => {
    return axios.delete(`/api/books/${id}`);
  },
};
