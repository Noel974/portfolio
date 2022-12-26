import { Container, Row, Col, Accordion, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/image/color-sharp2.png";

export const Formations = () => {
    return (
        <section className="formations" id="formations">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="formations-bx wow zoomIn">
                                    <h2>Formations</h2>
                                    <p>La formation est l'essence de succès.<br></br>Acquérir une formation solide c'est lire sans se lasser.</p>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Développeur web</Accordion.Header>
                                            <Accordion.Body>
                                                Emergence OI labalisé grande école du numerique attestation Développeur Intégrateur Web
                                                <ul>
                                                    <li>Etude et conception technique</li>
                                                    <li>Concevoir base de donnée MYSQL </li>
                                                    <li>Réaliser un site de A à Z</li>
                                                </ul>
                                            </Accordion.Body>
                                            <footer>(Emergnece OI)2008</footer>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header> Concepteur Développeur informatique</Accordion.Header>
                                            <Accordion.Body>
                                                Réalisation d'un site de  bibliothèque de partage. ce site permettait aux différents formateurs de partager les informations
                                                enregistrées dans une base de données et que les stagiaires puissent consulter ces informations.
                                                <ul>
                                                    <li>Concevoir et développer des composants d'interface utilisateur en intégrant les recommandations de sécurité</li>
                                                    <li>Concevoir et développer la persistance des données en intégrant les recommandations de sécurité</li>
                                                    <li> Concevoir et developper une application multicouche répartie en intégrant les recommandations de sécurité.</li>
                                                </ul>
                                            </Accordion.Body>
                                            <footer>(Afpa)2008</footer>
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