import React from "react";
import "./bookCard.css";
import { Row } from "./Grid";

const BookCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card-header d-flex">
        <div className="row w-100 justify-content-between">
          <div className="justify-left">
            <span className="title text-left">{props.title}</span>
            <span> Written by {props.authors}</span>
          </div>
          <div className="justify-right">
            <button
              className="btn btn-outline-dark shadow mr-3"
              onClick={() => {
                props.viewButtonOnClick(props.googleLink);
              }}
            >
              {" "}
              View
            </button>
            <button
              className="btn btn-info shadow ml-3"
              data-id={props.id}
              type={props.button2}
              onClick={() => {
                props.button2onClick(props.id);
              }}
            >
              {props.button2}
            </button>
          </div>
        </div>
      </div>
      <div className="card-body d-flex">
        <span className="justify-content-left">
          <img src={props.image} alt="" />
        </span>

        <span className="justify-content-right ml-4 text-left">
          {props.desc}
        </span>
      </div>
    </div>
  );
};

export default BookCard;
