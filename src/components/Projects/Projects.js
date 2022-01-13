import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import blockchain from "../../Assets/Projects/blockchain.jpeg";
import chess from "../../Assets/Projects/chess.jpg";
import fastlearn from "../../Assets/Projects/fastlearn.jpeg";
import flux from "../../Assets/Projects/flux.jpg";
import migration from "../../Assets/Projects/migration.png";
import pomodoro from "../../Assets/Projects/pomodoro.jpeg";
import sort from "../../Assets/Projects/sort.jpg";
import work from "../../Assets/Projects/work.jpg";
import matrix from "../../Assets/Projects/matrix.jpg";
import htop from "../../Assets/Projects/htop.jpg";
import sokoban from "../../Assets/Projects/sokoban.jpg";
import seo from "../../Assets/Projects/seo.jpg";

//import work1 from "../../Assets/Projects/work1.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          My <strong className="purple">Professional </strong> projects
        </h1>
        <p style={{ color: "white" }}>
          Depuis que je travail chez Letellier Developpement
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={migration}
              isBlog={false}
              isLink={true}
              title="Migrating Website"
              description="Created and configured new Windows server, then migrated the website. "
              link="https://letellierdeveloppement.fr"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flux}
              isBlog={false}
              isLink={false}
              title="Flow management"
              description="Created little software that read XML files left by our partners, then add every informations about the properties to the database. After that, I added a script to automatically launch this software and make it day-to-day."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work}
              isBlog={false}
              isLink={false}
              title="Backoffice"
              description="Establishment of a backoffice with authentication system, allowing the team to manage informations stored in the database (add, suppress, modify, etc.)"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={seo}
                isBlog={false}
                isLink={false}
                title="Search Engine Optimization"
                description="Even if I had no expérience in this field. I was able to make +2500% traffic on the website the firth month, then beat the traffic of the whole previous year, in only 3 months. (Lighthouse google: accessibility 96/100, SEO: 98/100)"
            />
          </Col>

        </Row>



        <h1 className="project-heading">
          My <strong className="purple">Academic </strong> Projects
        </h1>
        <p style={{ color: "white" }}>
          Some of the projects I realized at EPITECH
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sort}
              isBlog={false}
              isLink={true}
              title="Pushswap"
              description="C Language, using linked list. The goal was to sort list the fastest way possible, and using the least actions possible (rotation of the list to the left, rotation right, etc.)"
              link="https://github.com/cheshir-cat/My_pushswap"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matrix}
              isBlog={false}
              isLink={true}
              title="My_shell"
              description="C language. Software that reproduce linux's shell, with it interface, basic commands such as ls, cd, redirections (>>, <<, |, etc.)."
              link="https://github.com/cheshir-cat/My_shell"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sokoban}
              isBlog={false}
              isLink={true}
              title="My_sokoban"
              description="C language and Ncurse library. Little game in 2D, where the goal is to bring object to the target position."
              link="https://github.com/cheshir-cat/My_sokoban"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={htop}
              isBlog={false}
              isLink={true}
              title="Htop"
              description="My implementation of the Htop function, with the choice of the graphical library at launch( Ncurse , SFML, etc.). The goal is to show your computer's usage informations in real time (used memory, frequency of the disk, etc.)"
              link="https://github.com/cheshir-cat/My_htop"
            />
          </Col>

        </Row>



        <h1 className="project-heading">
          My <strong className="purple">Personal </strong> prjects
        </h1>
        <p style={{ color: "white" }}>
          Projects I developed on my free time
        </p>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              isLink={false}
              title="Chess game"
              description="Little chess game, developed in C++. Main functionality is being able to use any AI as opponent (Stockfish, Alphazéro, LeelaChess, Komodo chess engine, etc.)"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              isLink={false}
              title="CryptoZombie"
              description="Learning ethereum's language: solidity, through little games."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fastlearn}
              isBlog={false}
              isLink={true}
              title="Fast_learner"
              description="Little software, developed in C. Usefull to define and store the user's memorisation system (system Dominic O'brien: 07 represents james bond to me, 44 lewis hamilton, 24 is the action of looking at your watch (24h chrono), etc.)"
              link="https://github.com/cheshir-cat/fast_learn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pomodoro}
              isBlog={false}
              isLink={fastlearn}
              title="My_pomodoro"
              description="In Javascript, little software that allows the user to optimise his time, and focus more during work."
            />
          </Col>

        </Row>




      </Container>
    </Container>
  );
}

export default Projects;
