import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import about1 from "../../../Assets/about1.png";
import "./about.css"
function About() {
    return (
        <Container fluid className="about-section" id="about">
            <Row class="title-col" style = {{paddingLeft:"2%", paddingRight:"2%", paddingBottom: "2%"}}>
                <Col md={6} class="about-title">
                    <h3>About Top Olympiads Center</h3>
                </Col>
                <Col md={2} />
                <Col md={4} className="moreButton d-flex justify-content-end">
                    <Button variant="outline-primary" href = "http://www.topolympiads.com/">Learn More About Us</Button>
                </Col>
            </Row>
            <Row className="about-content" style = {{paddingLeft:"2%", paddingRight:"2%"}}>
                <Col md={6} className="about-text">
                    <p> WELCOME!

                        At Top Olympiads Center, we approach each
                        child as an individual with their own talents
                        and one-of-a-kind needs. Our goal is to help
                        your student meet the learning benchmarks for
                        their future to enter the university in their
                        dreams. We have:<br/>
                        <br/>
                        -Enrichment program for go to the top
                        universities<br/>
                        -Small-group for SAT/AP<br/>
                        -One-on-one for The Ivy League<br/>
                        -Small-group for the International Olympiads<br/>
                        <br/>
                        Our goal is to assist every student to succeed in
                        their ambitions and develop helpful skills for
                        their future.</p>
                </Col>
                <Col md={6} className="about-img">
                    <img src={about1} alt="about1" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    )
}

export default About;