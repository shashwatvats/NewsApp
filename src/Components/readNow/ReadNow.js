import React, { useState, useEffect } from "react";
import DisplayCard from "../displaycard/DisplayCard";

function ReadNow() {
  const [news, setnews] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:3001/api/v1/news", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setnews(data));
  }, []);
  const logout = () => {
    if (localStorage.getItem("token")) {
      localStorage.clear();
      window.location = "/";
    }
  };
  return (
    <div className="container mt-3" data-testid="divcontainer">
      <button className="btn btn-danger float-right" onClick={logout}>
        Logout <i class="fas fa-sign-out-alt"></i>
      </button>
      <div className="row ms-2" data-testid="divcontainerrow">
        {news.map((item) => (
          <div className="col-md-3">
            <DisplayCard
              url={item.url}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReadNow;
