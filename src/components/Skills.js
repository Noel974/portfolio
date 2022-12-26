import 'react-multi-carousel/lib/styles.css';
import { Tab, Tabs, Col, Container, Row } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import colorSharp from "../assets/image/banner.png"

export const Skills = () => {
  const now = "";
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Compténce</h2>
              <p>L’expérience est une lanterne attachée dans notre dos, qui n’éclaire que le chemin parcouru.<br></br>La seule source de connaissances est l'expérience.</p>
              <Tabs
                defaultActiveKey="Développeur"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                <Tab eventKey="Développeur" title="Développeur">
                  {/*Html , PHP */}
                  <Container>
                    <Row>
                      <Col>
                        <h1>Html</h1><ProgressBar now={99} />
                      </Col>
                      <Col>
                        <h1>PHP</h1><ProgressBar now={85} />
                      </Col>
                    </Row>
                  </Container>
                  {/*JS, Node JS*/}
                  <Container>
                    <Row>
                      <Col>
                        <h1>Js</h1><ProgressBar now={85} />
                      </Col>
                      <Col>
                        <h1>Node Js</h1><ProgressBar now={85} />
                      </Col>
                    </Row>
                  </Container>
                  {/*Csharp, Donet */}
                  <Container>
                    <Row>
                      <Col>
                        <h1>Csharp</h1><ProgressBar now={75} />
                      </Col>
                      <Col>
                        <h1>Dotnet</h1><ProgressBar now={90} />
                      </Col>
                    </Row>
                  </Container>
                  {/*React, angular */}
                  <Container>
                    <Row>
                      <Col>
                        <h1>React</h1><ProgressBar now={80} />
                      </Col>
                      <Col>
                        <h1>Angular</h1><ProgressBar now={80} />
                      </Col>
                    </Row>
                  </Container>
                  {/*Sql Server, Mysql */}
                  <Container>
                    <Row>
                      <Col>
                        <h1>Sql server</h1><ProgressBar now={70} />
                      </Col>
                      <Col>
                        <h1>Mysql</h1><ProgressBar now={70} />
                      </Col>
                    </Row>
                  </Container>
                  {/*MongoDB, CMS */}
                  <Container>
                    <Row>
                      <Col>
                        <h1>MongoDb</h1><ProgressBar now={70} />
                      </Col>
                      <Col>
                        <h1>Cms</h1><ProgressBar now={70} label={`${now}%`} />
                      </Col>
                    </Row>
                  </Container>
                  {/*Winform , Ionic*/}
                  <Container>
                    <Row>
                      <Col>
                        <h1>Winform</h1><ProgressBar now={70} />
                      </Col>
                      <Col>
                        <h1>Ionic</h1><ProgressBar now={75} />
                      </Col>
                    </Row>
                  </Container>
                  {/*Autre Compténce */}
                </Tab>
                <Tab eventKey="Autres" title="Autre">
                  {/*AndroidStudio*/}
                  <Container>
                    <Row>
                      <Col>
                        <h1>Android Studio</h1><ProgressBar now={60} />
                      </Col>
                      <Col>
                        <h1>Burotique</h1><ProgressBar now={90} />
                      </Col>
                    </Row>
                  </Container>
                  {/*Agile */}
                  <Container>
                    <Row>
                      <Col>
                        <h1>Agile</h1><ProgressBar now={80} />
                      </Col>
                      <Col>
                        <h1>Conseiller</h1><ProgressBar now={70} />
                      </Col>
                    </Row>
                  </Container>
                  {/*Désigner , Graphiste/Infographiste*/}
                  <Container>
                    <Row>
                      <Col>
                        <h1>Désigner</h1><ProgressBar now={90} />
                      </Col>
                      <Col>
                        <h1>Graphiste/Infographiste</h1><ProgressBar now={80} />
                      </Col>
                    </Row>
                  </Container>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
