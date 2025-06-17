import React from "react";

function RightImage({ imageUrl, productName, productDiscription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col p-5 mt-5 ">
          <h1 className="mt-5">{productName}</h1>
          <p>{productDiscription}</p>

          <div className="mb-3 mt-3">
            <a href={learnMore}>
              Learn More <i class="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>

        <div className="col-1"></div>
        <div className="col p-3 ">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightImage;
