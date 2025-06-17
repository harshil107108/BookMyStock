import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <h1 className="mt-4 mb-5">To create ticket,select a relevent topic</h1>
      <div className="row">
        <div className="col create-ticket">
          <h3 className="fs-4">
            <i class="fa-solid fa-plus"></i>Account Opening
          </h3>

          <p className="mt-5">
            <a href=""> Online Account Opening</a>
          </p>
          <p>
            <a href="">Offline Account Opening</a>
          </p>
          <p>
            <a href="">Company, Partnership and HUF Account Opening</a>
          </p>
          <p>
            <a href="">NRI Account Opening</a>
          </p>
          <p>
            <a href="">Charges at Zerodha</a>
          </p>
          <p>
            <a href="">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
          </p>
          <p>
            <a href="">Getting Started</a>
          </p>
        </div>
        <div className="col create-ticket">
          <h3 className="fs-4">
            <i class="fa-solid fa-user"></i> Your Zerodha Account
          </h3>

          <p className="mt-5">
            <a href="">Login Credentials</a>
          </p>
          <p>
            <a href="">Account Modification and Segment Addition</a>
          </p>
          <p>
            <a href="">DP ID and bank details</a>
          </p>
          <p>
            <a href="">Your Profile</a>
          </p>
          <p>
            <a href="">Transfer and conversion of shares</a>
          </p>
        </div>
        <div className="col create-ticket">
          <h3 className="fs-4">
            <i class="fa-solid fa-arrow-trend-up"></i>Your Zerodha Account
          </h3>

          <p className="mt-5">
            <a href=""> Margin/leverage, Product and Order types</a>
          </p>
          <p>
            <a href="">Kite Web and Mobile</a>
          </p>
          <p>
            <a href="">Trading FAQs</a>
          </p>
          <p>
            <a href="">Corporate Actions</a>
          </p>
          <p>
            <a href="">Sentinel</a>
          </p>
          <p>
            <a href="">Kite API</a>
          </p>
          <p>
            <a href="">Pi and other platforms</a>
          </p>
          <p>
            <a href="">Stockreports+</a>
          </p>
          <p>
            <a href="">GTT</a>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col create-ticket">
          <h3 className="fs-4"></h3>
          <p className="mt-5">
            <a href=""></a>
          </p>
        </div>
        <div className="col create-ticket">
          {" "}
          <h3 className="fs-4"></h3>
          <p className="mt-5">
            <a href=""></a>
          </p>
        </div>
        <div className="col create-ticket">
          {" "}
          <h3 className="fs-4"></h3>
          <p className="mt-5">
            <a href=""></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
