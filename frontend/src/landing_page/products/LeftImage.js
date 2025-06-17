import React from "react";

function LeftImage({
  imageUrl,
  productName,
  productDiscription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col p-3 ">
          <img src={imageUrl} />
        </div>
        <div className="col p-5 mt-5 ">
          <h1>{productName}</h1>
          <p>{productDiscription}</p>

          <div className="mb-3 mt-3">
            <a href={tryDemo}>
              {" "}
              Try Demo <i class="fa-solid fa-right-long"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "20px" }}>
              {" "}
              Learn More <i class="fa-solid fa-right-long"></i>
            </a>
          </div>

          <div>
            <a href={googlePlay}>
              {" "}
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              {" "}
              <img src="media\images\appstoreBadge.svg" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
