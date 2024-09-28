import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineLink, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Intro() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME{" "}
              <span className="text-container">
                <div className="text" data-text="INTRODUCE">
                  COMEÇAR
                </div>
              </span>{" "}
              EU MESMO
            </h1>
            <div className="home-about-body">
              Meu fascínio por computadores surgiu cedo, uma paixão que só cresceu desde
              aquelas primeiras explorações curiosas quando criança 👶.
            </div>
            <div className="home-about-body">
              Lembro-me vividamente da emoção do meu primeiro contato com a programação:
              uma aula de Introdução à Programação durante meu curso de Engenharia Civil,
              onde escrevi meu primeiro "Hello World" em C++. Aquele momento em que o
              tempo deixou de existir e o mundo se reduziu ao brilho da minha tela
              despertou em mim uma curiosidade e surpresa sobre como utilizar as
              tecnologias das linguagens de programação. 😳.
            </div>
            <div className="home-about-body">
              Após isso, mergulhei de cabeça nos estudos por conta própria, movido pela
              curiosidade e uma intensa vontade de aprender mais. Cada linha de código se
              tornou uma nova descoberta, e a sensação de desbravar um universo tão vasto
              e fascinante era indescritível. Cada desafio superado me enchia de
              entusiasmo e a paixão pela programação começou a florescer, acendendo uma
              chama que nunca mais se apagaria. 🤩
            </div>

            <div className="home-about-body">
              A cada dia, me aprimorava ao fazer cursos de programação, enquanto
              trabalhava em outras áreas. Sempre encontrava formas de melhorar os
              processos e otimizar meu trabalho com tecnologia. Essa busca constante por
              eficiência e inovação me impulsionava a explorar novas soluções e a integrar
              conhecimentos, transformando desafios em oportunidades.
            </div>

            <div className="home-about-body">
              Atualmente, sou desenvolvedor de software, focado na entrega de projetos com
              alta qualidade e colaborando em equipe. Meu compromisso é contribuir para o
              sucesso de cada projeto, sempre buscando soluções inovadoras e eficientes,
              promovendo um ambiente de trabalho harmonioso e produtivo. 🕵️
            </div>
            <div className="home-about-body">
              Minha experiência agora abrange as principais linguagens e stacks, como{" "}
              <i>
                <b className="lightblue">
                  {" "}
                  JavaScript, TypeScript, PHP, Python , Apache Kafka, Socket,
                  microsserviços{" "}
                </b>
              </i>{" "}
              e também frameworks como{" "}
              <i>
                <b className="lightblue">
                  NestJs, Node, Express, React, Angular entre outros !
                </b>
              </i>
              .
            </div>
            <div className="home-about-body">
              Estou profundamente interessado em desenvolver soluções inovadoras{" "}
              <i>
                <b className="lightblue">Web e tecnologias nativas</b>
              </i>
              , mergulhando em{" "}
              <i>
                <b className="lightblue">Arquitetura de Software</b>
              </i>
              , e explorando as complexidades{" "}
              <i>
                <b className="lightblue">desenvolvimento de Softwares</b>
              </i>
              .
            </div>
            <div className="home-about-body">
              Estou focado no ecossistema backend, sempre buscando aprimorar minhas
              habilidades. Essa jornada de aprendizado contínuo me motiva a explorar novas
              tecnologias e práticas, visando entregar soluções cada vez mais robustas e
              eficientes.Utilizando atualmente{" "}
              <i>
                <b className="lightblue">Bibliotecas e Frameworks JavaScript</b>
              </i>
              , buscando constantemente incorporar novas ideias em meus projetos.
            </div>
          </Col>
          <Col md={4} className="avatarImg">
            <Tilt gyroscope={true}>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-ME EM</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ReuelBandeira"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://linktr.ee/myperfil.io"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineLink />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/reuel-bandeira-843a92192/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/myperfil.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Intro;
