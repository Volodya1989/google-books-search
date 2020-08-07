import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  getBook: (query) => {
    return axios.get(URL+query);
  },
};