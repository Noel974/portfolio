import { Card, Row, Container, Col } from 'react-bootstrap';
import Cinema from "../assets/image/Cinema.svg";
import jeux from "../assets/image/jeux video.svg";
import theatre from "../assets/image/theatre.svg";
import jardin from "../assets/image/jardin.svg";
import bricolage from "../assets/image/bricolage.svg";
import carte from "../assets/image/carte.svg";

export const Propos = () => {
    return (
        <section className="propos" id="propos">
            <div className='container'>
                <div className='row'>
                    <div className="propos-bx wow zoomIn">
                        <h2>A propos</h2>
                        <p>Développer est un art. Développeur full stack. Passioné par le monde de l'informatique qui cesse d'evouler,
                            j’ai appris à coder dans divers langages informatiques.
                            Ouvert d'esprit, polyvalent, autonome, pragmatique, curieux et fasciné par les progrès technologiques je suis capable de m'adapter rapidement aux changements. </p>
                        <span>Ma soif d'apprendre est insatiable.</span>
                        <Card.Footer className="footer">
                            <h3>Mes loisirs</h3>
                            <Container>
                                <Row className="align-items-center">
                                    <Col size={12} sm={6} className="text-center text-sm-end">
                                        <div className="social-icon-propos">
                                            <a href="#"><img src={bricolage} alt="Icon" /><p>bRICOLAGE</p></a>
                                            <a href="#"><img src={Cinema} alt="Icon" /><p>bRICOLAGE</p></a>
                                            <a href="#"><img src={jardin} alt="Icon" /><p>bRICOLAGE</p></a>
                                            <a href="#"><img src={jeux} alt="Icon" /><p>bRICOLAGE</p></a>
                                            <a href="#"><img src={carte} alt="Icon" /><p>bRICOLAGE</p></a>
                                            <a href="#"><img src={theatre} alt="Icon" /><p>bRICOLAGE</p></a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Footer>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Propos;