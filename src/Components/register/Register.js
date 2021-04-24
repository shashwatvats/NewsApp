import React from "react";

function Register() {
  return (
    <div style={{ height: "72vh" }} className="mx-auto col-md-3 mt-4">
      <h2
        style={{ fontWeight: "600", color: "#563D7C" }}
        className="display-4 text-center"
      >
        Register
      </h2>
      <form>
        <div className="mb-3">
          <label for="username" className="form-label">
            Username
          </label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <i style={{ color: "#46A745" }} class="fas fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              id="username"
              name="username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">
              <i style={{ color: "#46A745" }} class="fas fa-unlock"></i>
            </span>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              id="password"
              name="password"
              aria-label="Username"
              aria-describedby="basic-addon2"
            />
          </div>
        </div>
        <button type="button" className="btn btn-success btn-block">
          Register <i class="fas fa-user-plus"></i>
        </button>
      </form>
      <hr />
      <div className="text-center">
        <a href="#">
          <i
            style={{ color: "#1877F2", marginRight: "10px" }}
            class="fab fa-facebook-f fa-2x"
          ></i>
        </a>
        <a href="#">
          <i
            style={{ color: "#0B66C2", marginRight: "10px" }}
            class="fab fa-linkedin-in fa-2x"
          ></i>
        </a>
        <a href="#">
          <i
            style={{ color: "#DE4F41", marginRight: "10px" }}
            class="fab fa-google-plus-g fa-2x"
          ></i>
        </a>
        <a href="#">
          <i style={{ color: "black" }} class="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

export default Register;
