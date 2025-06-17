import React from "react";

function Team() {
  return (
    <>
      <div className="heading text-center mt-3  border-top"></div>

      <div className="container">
        <h1 className="text-center mt-5">People</h1>
        <div className="row mt-5 mb-5">
          <div className="col-6 text-center">
            <img
              src="./media/images/PHOTO.jpg"
              style={{
                height: "300px",
                width: "300px",
                borderRadius: "100%",
                marginLeft: "15rem",
              }}
            />
            <div
              className="text-center"
              style={{ marginLeft: "14rem", marginTop: "2rem" }}
            >
              <h3 className="mb-3 text-muted">Harshil Prajapati</h3>
              <p className="text-muted">Founder,CEO</p>
            </div>
          </div>
          <div className="col-5 p-3 text-muted" style={{ lineHeight: "1.8" }}>
            <p>
              {" "}
              Harhil Prajapati is currently pursuing a Bachelor's degree in
              Computer Engineering from Government Engineering College,
              Gandhinagar. He is passionate about web development, AI
              integration, and building tech solutions that make a difference.
            </p>
            <p>
              {" "}
              He is actively working on various MERN stack projects and has
              hands-on experience in integrating real-time features and AI-based
              systems, especially in domains like agriculture and public
              service.
            </p>
            <p>
              {" "}
              In his free time, he enjoys exploring new technologies,
              participating in hackathons, and sharing knowledge with the
              community.
            </p>
            <p>
              {" "}
              Connect on{" "}
              <a href="" style={{ textDecoration: "none" }}>
                GitHub
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none" }}>
                LinkedIn
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
