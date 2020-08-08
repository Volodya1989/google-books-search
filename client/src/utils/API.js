import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  getBooks: (query) => {
    return axios.get(`${URL}${query}`);
  },
  getAllBooks: () => {
    return axios.get("/api/books");
  },
};
