// `/api/books` (get) - Should return all saved books as JSON.
// `/api/books` (post) - Will be used to save a new book to the database.
// `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
// `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  // .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .post(booksController.create)
  // .get(booksController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
