import React from "react";
import Card from "../card/Card";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
export default function Dashboard() {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  };
  const [news, setnews] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [pageSize, setpageSize] = useState("20");
  let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dc6f0641ab524aa5bee1b5e708172233&pageSize=${pageSize}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setnews(data.articles);
      });
  }, []);
  function searchPageSize() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dc6f0641ab524aa5bee1b5e708172233&pageSize=${pageSize}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setnews(data.articles);
        document.getElementById("btnClose").click();
      });
  }
  function searchCountry() {
    let val = document.querySelector('input[name="country"]:checked').value;
    let categoryInCountry = document.querySelector(
      'input[name="category"]:checked'
    ).value;
    let url_country = `https://newsapi.org/v2/top-headlines?country=${val}&category=${categoryInCountry}&apikey=dc6f0641ab524aa5bee1b5e708172233&pageSize=${pageSize}`;
    fetch(url_country)
      .then((res) => res.json())
      .then((data) => {
        setnews(data.articles);
        document.getElementById("btnClose").click();
      });
  }
  function searchCategory() {
    let val = document.querySelector('input[name="category"]:checked').value;
    var url_category;

    let countryInCategory = document.querySelector(
      'input[name="country"]:checked'
    ).value;
    url_category = `https://newsapi.org/v2/top-headlines?country=${countryInCategory}&category=${val}&apikey=dc6f0641ab524aa5bee1b5e708172233&pageSize=${pageSize}`;

    fetch(url_category)
      .then((res) => res.json())
      .then((data) => {
        setnews(data.articles);
        document.getElementById("btnClose").click();
      });
  }
  function searchKeyword() {
    let val = document.getElementById("keyword").value;
    let url_keyword = `https://newsapi.org/v2/top-headlines?q=${val}&apikey=dc6f0641ab524aa5bee1b5e708172233&pageSize=${pageSize}`;
    fetch(url_keyword)
      .then((res) => res.json())
      .then((data) => {
        setnews(data.articles);
        document.getElementById("btnClose").click();
      });
  }
  function searchSources() {
    let val = document.getElementById("sources").value;
    let url_sources = `https://newsapi.org/v2/top-headlines?sources=${val}&apikey=dc6f0641ab524aa5bee1b5e708172233&pageSize=${pageSize}`;
    fetch(url_sources)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setnews(data.articles);
        document.getElementById("btnClose").click();
      });
  }
  // function searchPageSize() {
  //   let val = document.getElementById("pageSize").value;
  //   if(document.querySelector('input[name="country"]:checked').value){
  //     let
  //   }
  //   let url_sources = `https://newsapi.org/v2/top-headlines?sources=${val}&apikey=dc6f0641ab524aa5bee1b5e708172233`;
  //   fetch(url_sources)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setnews(data.articles);
  //       document.getElementById("btnClose").click();
  //     });
  // }
  const onAddToReadLater = (data) => {
    console.log(data);
    fetch("http://localhost:3001/api/v1/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: data.url,
        author: data.author,
        title: data.title,
        description: data.description,
      }),
    })
      .then((res) => setOpen(true))
      .catch((err) => setOpen2(true));
  };
  const logout = () => {
    if (localStorage.getItem("token")) {
      localStorage.clear();
      window.location = "/";
    }
  };
  return (
    <div className="container mt-3" data-testid="divcontainer">
      {/* <!-- Button trigger modal --> */}
      <Button
        variant="contained"
        id="filterButton"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        color="primary"
      >
        Filter
      </Button>
      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Select From Below Categories
              </h5>
              <button
                type="button"
                id="btnClose"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="accordion" id="accordionExample">
                <input
                  type="number"
                  onChange={(e) => setpageSize(e.target.value)}
                  id="pageSize"
                  placeholder="Enter Page Size"
                  className="form-control "
                />
                <div className="text-center mt-2 mb-2">
                  <button
                    onClick={searchPageSize}
                    type="button"
                    class="btn btn-primary"
                  >
                    Search
                    <br />
                  </button>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Based On Country
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="in"
                        checked
                      />
                      India
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="us"
                      />
                      USA
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="fr"
                      />
                      France
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="au"
                      />
                      Australia
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="ar"
                      />
                      Argentina
                      <br />
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="ca"
                      />
                      Canada
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="cn"
                      />
                      China
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="de"
                      />
                      Germany
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="il"
                      />
                      Israel
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="it"
                      />
                      Italy
                      <br />
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="jp"
                      />
                      Japan
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="mx"
                      />
                      Mexico
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="nz"
                      />
                      New Zealand
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="sa"
                      />
                      Saudi Arabia
                      <br />
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="za"
                      />
                      South Africa
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="es"
                      />
                      Spain
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="country"
                        value="gb"
                      />
                      United Kingdom
                      <div className="text-center mt-2">
                        <button
                          onClick={searchCountry}
                          id="search"
                          // style={{ display: "block" }}
                          type="button"
                          class="btn btn-primary"
                        >
                          Search
                          <br />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Based on Category
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="category"
                        value="business"
                      />
                      Business
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="category"
                        value="entertainment"
                      />
                      Entertainment
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="category"
                        value="general"
                        checked
                      />
                      General
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="category"
                        value="health"
                      />
                      Health
                      <br />
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="category"
                        value="science"
                      />
                      Science
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="category"
                        value="sports"
                      />
                      Sports
                      <input
                        className="ms-2 me-1"
                        type="radio"
                        name="category"
                        value="technology"
                      />
                      Technology
                      <div className="text-center mt-2">
                        <button
                          onClick={searchCategory}
                          // style={{ display: "block" }}
                          type="button"
                          class="btn btn-primary"
                        >
                          Search
                          <br />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Based on Search Keyword<b>(ex.trump)</b>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <TextField id="keyword" label="Enter Keyword" />
                      <div className="text-center mt-2">
                        <button
                          onClick={searchKeyword}
                          type="button"
                          class="btn btn-primary"
                        >
                          Search
                          <br />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Based on Sources <b>(ex.bbc-news)</b>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <TextField
                        id="sources"
                        type="text"
                        label="Enter Sources"
                      />
                      <div className="text-center mt-2">
                        <button
                          onClick={searchSources}
                          type="button"
                          class="btn btn-primary"
                        >
                          Search
                          <br />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Based on Page Size <b>(between 1-100)</b>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body"></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="contained"
        id="logOut"
        className="float-right"
        onClick={logout}
        color="secondary"
      >
        Logout <i style={{ marginLeft: "3px" }} class="fas fa-sign-out-alt"></i>
      </Button>
      <div className="row ms-2 mt-3" data-testid="divcontainerrow">
        {news.map((item) => (
          <div className="col-md-3">
            <Card
              onAddToReadLater={onAddToReadLater}
              key={uuidv4()}
              url={item.urlToImage}
              title={item.title}
              author={item.source.name}
              description={item.description}
            />
          </div>
        ))}
      </div>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Added To Read Later!
        </Alert>
      </Snackbar>
      <Snackbar
        open={open2}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={handleClose2}
      >
        <Alert onClose={handleClose2} severity="error">
          Something Went Wrong!
        </Alert>
      </Snackbar>
    </div>
  );
}
