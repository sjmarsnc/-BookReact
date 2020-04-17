import React, { useContext } from "react";
import BookCard from "./BookCard";
import GlobalContext from "../utils/GlobalState";

const BookList = (props) => {
  const globalState = useContext(GlobalContext);
  console.log("In BookList: ", globalState.searchList);

  return (
    <div className="card shadow-lg mt-4">
      {globalState.searchList.length === 0 ? (
        <h4 className="m-5">No books found that match search string.</h4>
      ) : (
        <>
          <div className="card-header text-left">{props.sectionTitle}</div>
          <div className="card-body">
            {globalState.searchList.map((book) => (
              <BookCard
                title={book.title}
                authors={book.authors.join(", ")}
                image={book.images ? book.images.thumbnail : ""}
                desc={book.description}
                googleLink={book.link}
                button2={
                  props.sectionTitle === "Saved Books" ? "Delete" : "Save"
                }
                button2onClick={props.button2onClick}
                key={book.googleId}
                id={book.googleId}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookList;
