import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Allow me to <span className="purple"> present myself </span>
            </h1>
            <p className="home-about-body">
              Passioned about coding and development,
              <br />
              <br />
              I master the classics such as
              <i>
                <b className="purple"> C, C++, Python et Javascript. </b>
              </i>
              <br />
              <br />
              at the moment i am focusing on &nbsp;
              <i>
                <b className="purple">
                  Web development and Blockchain technology
                </b>
              </i>
              <br />
              <br />

              I take every opportunity I can to practice my passion through various projects in &nbsp;
              <i>
                <b className="purple">Modern Javascript Framework</b>
              </i>
                &nbsp; such as
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="purple">Follow</h1>
            <p>
              me on my social networks
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/cheshir-cat"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kiari-abdelkader/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
