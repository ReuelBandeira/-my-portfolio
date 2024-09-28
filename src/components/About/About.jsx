import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Transition from "./Transition";
import meImg from "../../assets/me.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", marginBottom: "20px" }}>
              Descubra meu <strong>universo</strong>
            </h1>

            <div className="aboutText">
              Saudações! Sou <span style={{ color: "#1E90FF" }}>Reuel Bandeira</span>.
              Bacharel em Engenharia Civil 🏗️ e pós-graduado em Engenharia de Software 💻.
              Navego pela tecnologia com entusiasmo e experiência! 🚀✨
            </div>
            <div className="aboutText">
              Além da minha dedicação à codificação, que ocupa a maior parte do meu tempo
              💻, também me dedico a hobbies que alimentam minha criatividade 🎨.
            </div>

            <ul
              style={{
                fontSize: "1.2em",
                listStyleType: "none",
                padding: 0,
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                Mergulho na prática de instrumentos musicais, como guitarra 🎸, teclado
                🎹, ukulele 🎶 e guitarlele 🎤.
              </li>
              <li style={{ marginBottom: "10px" }}>
                ✍️ Faço projetos em 3D, tanto mecânicos 🛠️ quanto artísticos 🎨, e imprimo
                minhas criações com impressora 3D 🖨️.
              </li>
              <li>Sempre que possível, pratico esportes, especialmente futebol ⚽️!</li>
            </ul>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              style={{ padding: "30px", borderRadius: "50%" }}
              src={meImg}
              alt="about"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <div>
              <Transition />
            </div>
            <p
              style={{
                textAlign: "left",
                fontSize: "1.5em",
                paddingTop: "4em",
              }}
            >
              🧠 Albert Einstein
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
