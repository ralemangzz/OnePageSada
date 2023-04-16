import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () =>{
    return (
        <footer className="footer">
             <Container>
                <Row className="">
                    <Col size={12} sm={6}>
                        <h3>Sada Servicio</h3>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="Icon" /></a>
                            <a href="#"><img src={navIcon2} alt="Icon" /></a>
                            <a href="#"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2023. Derechos Reservados</p>
                    </Col>
                </Row>
            </Container>   
        </footer>
    )
}

