import React from "react";
import "./bookCard.css";

const BookCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card-header d-flex">
        <div className="flex-left">
          <span className="title text-left">{props.title}</span>
          <span> Written by {props.authors}</span>
        </div>
        <div className="flex-right">
          <button>
            <a href={props.link}>View</a>
          </button>
          <button
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
