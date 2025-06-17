import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media\images\education.svg" />
        </div>
        <div className="col-6">
          <h1 className="mt-5">Free and market education</h1>
          <div className="mb-5 mt-5">
            <p>
              Varsity,the largest online stock market education book in the
              world covering everything from basics to advanced trading{" "}
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              Versity <i class="fa-solid fa-right-long"></i>
            </a>
          </div>

          <div>
            <p>
              TradingQ&A,the most active trading and investment community in
              india for all your market related queries
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              TradingQ&A <i class="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
