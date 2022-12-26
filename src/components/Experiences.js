import { Container, Row, Col, Accordion, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/image/color-sharp2.png";

export const Experiences = () => {
    return (
        <section className="experiences" id="experiences">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="experiences-bx wow zoomIn">
                                    <h2>Experience</h2>
                                    <p>L'expérience, ce n'est pas ce qui arrive à un homme, c'est ce qu'un homme fait avec ce qui lui arrive..<br></br>La seule source de connaissances est l'expérience.</p>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Stage Conseil départemental</Accordion.Header>
                                            <Accordion.Body>
                                                Concevoir un site web qui avait comme objectif une annuaire entreprise installer sur un serveur local
                                                 sur lequel les employés puissent en consulter.
                                                <ul>
                                                    <li>Etude et conception technique</li>
                                                    <li>mise en place et maintenance de sites web Drupal </li>
                                                    <li>Rédaction de spécifications techniques</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Stage Afpar</Accordion.Header>
                                            <Accordion.Body>
                                                Réalisation d'un site de  bibliothèque de partage. ce site permettait aux différents formateurs de partager les informations
                                                enregistrées dans une base de données et que les stagiaires puissent consulter ces informations.
                                                <ul>
                                                    <li>Gestion de projet avec Jira (méthode agile Scrum) </li>
                                                    <li>Modélisation structurelle avec les diagrammes de classes ( UML )</li>
                                                    <li> Conception du modèle physique de données</li>
                                                    <li>Développement d'applications web front-end </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}
