import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import Button from 'react-bootstrap/Button';

function DisplayCard(props) {
  const onDeleteHandler = (id) => {
    props.onDelete(id);
  }
  return (
    <div>
      <div
        style={{ maxHeight: "350px", minWidth: "200px" }}
        className="card mb-2"
        data-testid="card"
      >
        <PerfectScrollbar>
          <img
            className="card-img-top"
            src={props.url}
            style={{ maxHeight: "150px" }}
            alt="Image Not Found!"
            data-testid="img"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <h4 className="btn btn-primary" onClick={() => (window.location.href = props.urlToSource)}>Go To Source ...</h4>
          </div>
        </PerfectScrollbar>
        <Button variant="outline-danger" onClick={onDeleteHandler.bind(this, props.id)}>Delete</Button>
      </div>
    </div>
  );
}

export default DisplayCard;
