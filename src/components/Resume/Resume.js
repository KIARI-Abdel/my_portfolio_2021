import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/CV_EN_KIARI_Abdelkader.pdf";

function Resume() {


  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience </h3>
            <Resumecontent
                title="Co-Founder and CTO"
                date="October 2021 - Present"
                compagny="Company: TokkArts"
                content={[
                    "As the Co-Founder of the compagny, I give my opinion on important subjects, and I try my best to develop this company.",
                    "And as the CTO, I work on developing our platform and features, following agile methodology.",
                    ]}
            />
            <Resumecontent
              title="Junior FullStack Web developer"
              date="January 2021 - Present"
              compagny="Company: Real estate and Wealth advisor Company"
              content={[
                  "I started by creating a new windows server, then migrated the website (ASP.Net 4.5.2). I then added FTP and SFTP servers.",
                  "I made the XML uploaded files (from our partners) automatically added to the database, and shown on the website. I was then able to add content and features (calc form for tax exemption depending on the region you are living in, etc.)",
                  "After that, I created a backoffice with an API, to help the team manage all the data stored in the database, and finally, I worked on SEO (+2500% in one month, and then beat all the traffic of the previous year, in 3 months).",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="IONIS Project Week with Nike"
              date="February 2020"
              content={[
                  "National Winner of the IONIS Project Week competition with Nike. With the idea of a connected shoe, that is able to change and evolve in real-time. Challenges are proposed to the user on the application in exchange of a certain amount of points. Users can then go to the shop, unlock new colors for their shoes using the points they unlocked from challenges, witch allows them infinite personalisation for their shoes.",
              ]}
            />
            <Resumecontent
              title="Hackaton EPITECH"
              date="2020"
              content={[
                  "Establishment of a tool allowing management of the attendance at courses, and estimating the number of empty places in the room. Using python3 on raspberry PI",
              ]}
            />
            <Resumecontent
              title="Global Game Jam"
              date="January 2019"
              content={[
                  "Establishment of a 2D multiplayer platform game using Unity",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Sandwich courses - FullStack Web Developer (options: React + NodeJS)"
              date="October 2020 - October 2021"
              school="School: 3W Academy"
              content={[
                  "Learning Web development (front and back).",
                  "End-year project: Backoffice, with an API and secured routes. Using MERN stack (Mongo/Mongoose, Express, React and NodeJS).",
                "1 week at school, 3 weeks at work"
              ]}
            />
            <Resumecontent
              title="Expert in Computer science and Innovation"
              date="September 2017 - June 2020"
              school="School: EPITECH - Toulouse"
              content={[
                  "Learning development (software, web, network, ...) through pools (bootcamp) and projects.",
                  "Also learning good practices and mindsets, thanks to the many conferences and speakers that come to EPITECH",
              ]}
            />
            <Resumecontent
              title="Odontology"
              date="September 2012 - June 2017"
              school="Universidad Alfonso X el Sabio - Madrid"
              content={[
                  "Spent 4 years in madrid, studying how to become a dentist."
              ]}
            />
            <Resumecontent
              title="PACES"
              date="September 2011 - May 2012"
              school="Université de pharmacie de Montpellier"
              content={[
                  "First year of medicine, to prepare the end-year competition"
              ]}
            />
            <Resumecontent
              title="Scientifique high school diploma"
              date="June 2011"
              school="Lycée Paul-Sabatier - Carcassonne"
              content={[
                  "Physics specialization"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
