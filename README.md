# Google Books Search

### Overview

This app uses the Google Books Search api and React to let you search the books database based on a string that you specify. You can then:

- view details on any of those books
- mark a book as saved
- see a list of your saved books
- drop a book from your saved list

### Implementation

This app uses the following technologies:

- React
- MongoDB
- Express / Node.js
- Bootstrap css framework

It is deployed on [Heroku](https://sjmarsnc-book-react.herokuapp.com/)
 
### Internals 

This application uses the following routes 

GET `/api/books` - Returns all saved books as JSON.

POST `/api/books` - Saves a new book to the database (pass in the object as returned from the google API)

DELETE `/api/books/:id` - Deletes a book from the database by Mongo `_id`.

GET `/api/search/:searchString - Sends the search string to the Google book API, looks for the string in any field 

### Possible future enhancements 

- Let search be specific to title, author, or subject 
intitle, inauthor, subject, see how to string together below

GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey


- Use React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an book. Your message should include the title of the saved book.

  - Say you have multiple browsers open, each one visiting your site. If you save an book in one browser, then all of your browsers should notify you that a new book was saved.

  - [Socket.io NPM package](https://www.npmjs.com/package/socket.io)

