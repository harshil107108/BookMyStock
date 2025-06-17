import React from "react";

function Hero() {
  return (
    <>
      <div className="container ">
        <div className="row text-center mt-3">
          <h1 className="mt-5 mb-4">Technology</h1>
          <h3 className="mb-4 text-muted">
            Sleek,morden and intuitive trading plateforms
          </h3>
          <p>
            checkout our{" "}
            <a href="" style={{ textDecoration: "none " }}>
              {" "}
              investment offering <i class="fa-solid fa-right-long"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="border-bottom mt-5 mb-5"></div>
    </>
  );
}

export default Hero;
