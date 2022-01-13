import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I am <span className="purple">KIARI Abdelkader </span>
            from <span className="purple"> Toulouse, France.</span>
            <br />I am a Web developer, I just Co-Founded my new company TokkArts, and am now working as it CTO.
            <br />
            <br />
            My passions outside of coding are :
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Sciences (maths, physics, etc.)
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>Chess (aiming for FM hopefully)
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Crypto enthusiastic (love the blockchain technology)
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Personal Development (mémorisation, méditation, etc.)
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Make my humble contribution to humanity through my passion: development"{" "}

          </p>
          <footer className="blockquote-footer">KIARI</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
