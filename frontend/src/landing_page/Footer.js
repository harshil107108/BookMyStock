import React from "react";

function Footer() {
  return (
    <footer className="bg-light">
      <div className="container  border-top p-5 ">
        <div className="row">
          <div className="col">
            <img src="media\images\logo.svg" style={{ width: "50%" }} />
            <p className="mt-3">
              © 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col footer-class">
            <p>Comapany</p>
            <br />
            <a href="">About</a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral programme</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Zerodha.tech</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Zerodha cares (CSR)</a>
          </div>
          <div className="col footer-class">
            <p>Support</p>
            <br />
            <a href="">Contact</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
          </div>
          <div className="col footer-class">
            <p>Account</p>
            <br />
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">60 day challenge</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
