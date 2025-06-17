import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="support-hero">
      <div className=" p-5 mt-5 " id="suppoerWraper">
        <h3>Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>

      <div className="row offset-1">
        <div className="col p-5">
          <h1 className="fs-3 mb-3">
            Search for an answeror browse help topics to create a ticket
          </h1>
          <input
            className="mb-3"
            placeholder="Eg:how do i activate F&O,why is my order getting rejected."
            style={{
              border: "none",
              borderRadius: "5px",
              width: "80%",
              height: "30%",
              padding: "20px",
            }}
          />
          <br></br>
          <div className="supportHero_link">
            <a href="">Track account opening </a>
            <a href="">Track segment activation</a>
            <a href="">Intraday</a>
            <br></br>
            <a href=""> margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col p-5">
          <h1 className="fs-3 mb-3">Featured</h1>
          <ol className="supportHero_list mb-3">
            <li className="mb-3">
              {" "}
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              {" "}
              <a href="">Latest intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
