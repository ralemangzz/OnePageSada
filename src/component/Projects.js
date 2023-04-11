import { Container, Tab, Col, Row, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.PNG";

export const Projects = () =>{

    const Projects =  [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
       
       
        
        
    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Nuestros Proyectos</h2>
                    <p>Estos son alguno de nuestros proyectos</p>
                    <Tab.Container id="project-tabs" defaultAciveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                           {
                                Projects.map((project, index) =>{
                                    return(
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                    )
                                })
                           } 
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Loren</Tab.Pane>
                    <Tab.Pane eventKey="third">Loren</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}