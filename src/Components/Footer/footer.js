import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md={4} className="footer-copywright">
                    <span>Copyright @ {year} Top Olympiads Center </span><br/>
                    <span>info@topolympiads.com</span>
                </Col>
                <Col md={4} className = "d-flex justify-content-center">
                    <span>Desgined and Developed by Victor Deng</span>
                </Col>
                <Col md={4} className="footer-copywright" >
                    <span>Mississauga, ON, Canada<br/>
                    +1 516-233-0610, +1 6478863957<br/>
                    </span>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;