import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        data-testid="navbar"
        style={{ backgroundColor: "#563D7C", color: "white" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            <h2 style={{ color: "white" }}>
              <b>News App</b>
            </h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  style={{ color: "white" }}
                  className="nav-link"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="readNow"
                  to="/readnow"
                  style={{ color: "white" }}
                  className="nav-link"
                >
                  Read Now
                </Link>
              </li>
            </ul>
            <span style={{ color: "white" }} className="navbar-text mx-auto">
              <h5 id="heading">
                Welcome <b>{props.titleName.toUpperCase()}</b>
              </h5>
            </span>
            <ul className="navbar-nav ml-auto me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  style={{ color: "white" }}
                  className="nav-link btn btn-primary"
                >
                  Login <i className="fas fa-sign-in-alt"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  style={{ color: "white" }}
                  className="nav-link"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
