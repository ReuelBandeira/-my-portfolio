import React from "react";
import { Col, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  SiUbuntu,
  SiCentos,
  SiWindows,
  SiVisualstudiocode,
  SiVisualstudio,
  SiPostman,
  SiJira,
  SiInsomnia,
} from "react-icons/si";

import { DiTrello, DiLinux } from "react-icons/di";

function Toolstack() {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <h1 className="project-heading">
          <strong>DevTools | IDEs | OS</strong>
        </h1>
        <Col xs={4} md={2} className="tech-icons">
          <SiUbuntu />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCentos />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiWindows />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJira />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiInsomnia />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiTrello />
        </Col>
      </Row>
    </IconContext.Provider>
  );
}

export default Toolstack;
