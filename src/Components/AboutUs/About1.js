import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about1.css";
import logoBlack from "../../Assets/logoBlack.png"
import { RiH3, RiH5 } from "react-icons/ri";

export class About1 extends Component {
    render() {
        return (
            <div className="about-section">
                <Row style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                    <h2 class="titleAbout">Welcome to TOP Olympiads Center</h2>
                </Row>
                <Row style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                    <h3 class="titleAbout">We make the most out of every child's potential.
                        To believe in yourself, To strengthen yourself,
                        To do your best</h3>
                </Row>
                <Row className="about-content" style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                    <Col md={6}>
                        <p className="introAbout"><br />
                            That is what will take you to the best universities, to the Ivy League, and to International Olympiads. <br />
                            Top Olympiads Center is an Ontario based registered non-profit organization. We provide advanced programs to help students get more out of their studying and help increase their capabilities and studying skills.  All programs/clubs/camps/classes will also help those students who are interested in challenging their skills and gaining knowledge for higher achievements. These challenges include Canadian Olympiads and International Olympiad. As a result, our club/camp members will get a solid foundation for future higher education and an upper hand in life.
                        </p>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={logoBlack} alt="about1" className="img-fluid"/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}