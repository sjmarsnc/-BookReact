import React from "react";
import BookCard from "./BookCard";

const BookList = ({ sectionTitle, books }) => {
  //   console.log("In BookList: ", books);

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-header text-left">{sectionTitle}</div>
      <div className="card-body">
        {books.map(book => (
          <BookCard
            title={book.title}
            authors={book.authors.join(", ")}
            image={book.images ? book.images.thumbnail : ""}
            desc={book.description}
            googleLink={book.link}
            button2={sectionTitle === "Saved Books" ? "Delete" : "Save"}
            key={book.googleId}
            id={book.googleId}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
