import React from "react";

function Stats() {
  return (
    <div className="container mt-5 p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="mb-5 fs-2  ">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customer Trust Zerodha with 3.5+ lakh crore
            worth if equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            That's why 1.3+ crore customer Trust Zerodha with 3.5+ lakh crore
            worth if equity investments.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            That's why 1.3+ crore customer Trust Zerodha with 3.5+ lakh crore
            worth if equity investments.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            That's why 1.3+ crore customer Trust Zerodha with 3.5+ lakh crore
            worth if equity investments.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media\images\ecosystem.png" style={{ width: "90%" }} />
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-right-long"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo <i class="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
