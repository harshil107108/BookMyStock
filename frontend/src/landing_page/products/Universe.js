import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center mt-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner plateforms
        </p>

        <div className="row mt-5">
          <div className="col p-3">
            <img src="media\images\smallcaseLogo.png" />
            <p className="text-small text-muted">Thematic investment</p>
          </div>
          <div className="col p-3">
            <img
              src="media\images\streakLogo.png"
              style={{ height: "50%", width: "50%" }}
            />
            <p className="text-small text-muted">Algo & strategy plateform </p>
          </div>
          <div className="col p-3">
            <img
              src="media\images\sensibullLogo.svg"
              style={{ height: "50%", width: "50%" }}
            />
            <p className="text-small text-muted">Options trading plateform</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col p-3">
            <img
              src="media\images\zerodhaFundhouse.png"
              style={{ height: "50%", width: "50%" }}
            />
            <p className="text-small text-muted">Asset management</p>
          </div>
          <div className="col p-3">
            <img src="media\images\goldenpiLogo.png" />
            <p className="text-small text-muted">Bonds trading plateform</p>
          </div>
          <div className="col p-3">
            <img
              src="media\images\dittoLogo.png"
              style={{ height: "50%", width: "50%" }}
            />
            <p className="text-small text-muted">Insurance</p>
          </div>
        </div>
        <button
          className="btn btn-primary p-2 fs-5 mt-3 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Universe;
