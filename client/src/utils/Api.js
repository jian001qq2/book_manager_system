import axios from "axios";

export const bookApi = {
  //get all the book
  getBooks: function () {
    return axios.get("/api/books")
  },
  // add a book to the book database
  addBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  updateBook: function (id) {
    return axios.put("/api/books/" + id)
  }
};

export const eventApi = {
  //get all the book
  getEvents: function () {
    return axios.get("/api/events")
  },
  // add a book to the book database
  addEvent: function (bookData) {
    return axios.post("/api/events", bookData);
  },
  // Gets the book with the given id
  getEvent: function (id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes the book with the given id
  deleteEvent: function (id) {
    return axios.delete("/api/events/" + id);
  },
  updateEvent: function (id) {
    return axios.put("/api/events/" + id)
  }
}
export const userApi = {
  //get all the book
  getUsers: function () {
    return axios.get("/api/users")
  },
  // add a book to the book database
  adduser: function (bookData) {
    return axios.post("/api/users", bookData);
  },
  // Gets the book with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function (id) {
    return axios.delete("/api/books/" + id);
  },
  updateUser: function (id) {
    return axios.put("/api/users/" + id)
  }
}