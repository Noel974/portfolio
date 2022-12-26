import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/image/logoamajnoel.png";
import antoinecv from "../Document/antoinecv.pdf"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>

            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Je me présents Antoine NOEL`}<Typewriter options={{strings: ['Développeur', 'Concepteur', 'Graphisme'], autoStart: true, loop: true,}}/></h1>
                  <button><a href={antoinecv}></a><ArrowRightCircle size={25} />CV</button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}