import React from "react";

function Brokrage() {
  return (
    <div className="container p-5 mb-5 border-bottom">
      <div className="row text-center">
        <div className="col">
          <img src="media\images\pricing0.svg" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p>
            All quity dilivery investments(NSE,BSE),are absolutly free-₹0
            brokrage.
          </p>
        </div>
        <div className="col">
          <img src="media\images\intradayTrades.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p>
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col">
          <img src="media\images\pricingMF.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commission or hidden charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokrage;
