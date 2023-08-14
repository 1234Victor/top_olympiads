import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./instructor.css";
import { RiH3, RiH5 } from "react-icons/ri";
import ins1 from "../../Assets/ins1.png";
import ins2 from "../../Assets/ins2.png";
import ins3 from "../../Assets/ins3.png";
import ins4 from "../../Assets/ins4.png";
import ins5 from "../../Assets/ins5.jpg";
import ins6 from "../../Assets/ins6.jpg";
import ins11 from "../../Assets/ins11.jpg";
import ins12 from "../../Assets/ins12.jpg";
import ins13 from "../../Assets/ins13.jpg";
import ins14 from "../../Assets/ins14.jpg";
import ins15 from "../../Assets/ins15.jpg";
import ins16 from "../../Assets/ins16.jpg";

export class InstructorCard extends Component {
    render() {
        return (
            <div className="about-section">
                <Row className="about-content" style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                    <Col md={4}>
                        <div className="d-flex justify-content-center">
                            <img src={ins1} alt="about1" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center">
                            <img src={ins11} alt="about1" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <p className="rtext">
                            Run Ze Cao<br />

                            Won two gold and one silver medal at the International Olympiads.<br />

                            Top Scholar of the Toronto District School Board (TDSB) in 2012, with average 99.7%<br />

                            Won Governor General's Academic Medal<br />

                            and went to an Ivy League university
                        </p>
                    </Col>
                </Row>
                <div className = "line-separator" />
                <Row className="about-content" style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                    <Col md={4}>
                        <p className="ltext">

                            Run Ze Cao<br />

                            and the Canadian Olympiad Team <br />

                            at the 21st International Biology Olympiad<br />

                            Korea, Changwon
                        </p>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center">
                            <img src={ins12} alt="about1" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center">
                            <img src={ins2} alt="about1" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
                <div className = "line-separator" />
                <Row className="about-content" style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                    <Col md={4}>
                        <div className="d-flex justify-content-center">
                            <img src={ins3} alt="about1" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center">
                            <img src={ins13} alt="about1" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <p className="rtext">
                            Run Ze Cao<br />
                            and the Canadian Olympiad Team <br />
                            at the 44th International Chemistry Olympiad <br />
                            Washington, D.C. · United States
                        </p>
                    </Col>
                </Row>
                <div className = "line-separator" />
                <Row className="about-content" style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                    <Col md={4}>
                        <p className="ltext">
                            Run Ze Cao<br />
                            and the Canadian Olympiad Team<br />
                            at the 23rd International Biology Olympiad<br />
                            Singapore
                        </p>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center">
                            <img src={ins14} alt="about1" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center">
                            <img src={ins4} alt="about1" className="img-fluid" />
                        </div>
                    </Col>

                </Row>
                <div className = "line-separator" />
                <Row className="about-content" style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                    <Col md={4}>
                        <div className="d-flex justify-content-center">
                            <img src={ins5} alt="about1" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center">
                            <img src={ins15} alt="about1" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <p className="rtext">
                            Run Ze Cao<br />

                            Instructor and Team Leader<br />

                            and Canadian Team at<br />

                            46th International Physics Olympiad, Mumbai India
                        </p>
                    </Col>
                </Row>
                <div className = "line-separator" />
                <Row className="about-content" style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                    <Col md={4}>
                        <p className="ltext">
                            Run Ze Cao<br />

                            Instructor and Team Leader<br />

                            and Canadian Team at<br />

                            47th International Physics Olympiad, Zurich, Switzerland & Liechtenstein
                        </p>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center">
                            <img src={ins16} alt="about1" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center">
                            <img src={ins6} alt="about1" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}