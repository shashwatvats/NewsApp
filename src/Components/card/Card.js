import React from "react";

function Card(props) {
  const addToReadLater = (url, author, title, description) => {
    props.onAddToReadLater({ url, author, title, description });
  };
  return (
    <div>
      <div className="card" data-testid="card">
        <img
          className="card-img-top"
          src={props.url}
          style={{ maxHeight: "150px" }}
          alt="Image Not Found!"
        />
        <div className="card-body">
          <h5 className="card-title">{props.author}</h5>
          <p className="card-text">{props.title}</p>
          <button
            onClick={addToReadLater.bind(
              this,
              props.url,
              props.author,
              props.title,
              props.description
            )}
            className="btn btn-info"
            id="readLater"
            data-testid="addtoreadlater"
            style={{
              backgroundColor: "#563D7C",
              border: "none",
            }}
          >
            Read Later <i class="far fa-bookmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
