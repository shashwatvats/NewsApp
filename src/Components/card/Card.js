import React from "react";

function Card(props) {
  const addToReadLater = (url, author, title, description, urlToSource) => {
    props.onAddToReadLater({ url, author, title, description, urlToSource });
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
              props.description,
              props.urlToSource
            )}
            className="btn btn-info"
            id="readLater"
            data-testid="addtoreadlater"
            style={{
              backgroundColor: "#563D7C",
              border: "none",
            }}
          >
            Read Later <i className="far fa-bookmark"></i>
          </button>
          <button className="btn btn-primary btn-sm mt-2" onClick={() => (window.location.href = props.urlToSource)}>Go To Source ...</button>
        </div>
      </div>
    </div>
  );
}
export default Card;
