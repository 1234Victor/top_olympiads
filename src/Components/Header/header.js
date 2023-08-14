import React, { useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbOlympics } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { RiParentLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";
import { FaPersonCane } from "react-icons/fa6";
import { CgFileDocument } from "react-icons/cg";
import "./header.css";
import { Link } from "react-router-dom";
import logoBlack from "../../Assets/logoBlack.png";
import logoWhite from "../../Assets/logoWhite.png";


function Header() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        }
        else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <>
            <Navbar
                expanded={expand}
                fixed="top"
                expand="md"
                className={navColour ? "sticky" : "navbar1"}
            >
                <Container>
                    <Navbar.Brand href="/" className="d-flex">
                        <img src={navColour ? logoWhite : logoBlack} className="img-fluid logo" alt="Victor" />
                        <strong class="title"> Top Olympiads Center</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={() => {
                            updateExpanded(expand ? false : "expanded");
                        }}
                    >
                        <span />
                        <span />
                        <span />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" defaultActiveKay="#home">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                    Home
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    href="https://runzeworld.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => updateExpanded(false)}
                                >
                                    Online Courses
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    href="https://runzeworld.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => updateExpanded(false)}
                                >
                                    Free Math 1-8
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    href="http://www.topolympiads.com/contact-us.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => updateExpanded(false)}
                                >
                                    Contact Us
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar
                expanded={expand}
                expand="md"
                className="sticky"
            >
                <Row className="w-100">
                    <Col>
                        <Nav className="extraNav" defaultActiveKey="#home">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                    <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/programs"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <FaChalkboardTeacher style={{ marginBottom: "2px" }} /> Programs
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/olympiads"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <TbOlympics style={{ marginBottom: "2px" }} /> Olympiads
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/timetable"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <SlCalender style={{ marginBottom: "2px" }} /> Timetable
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/parents"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <RiParentLine style={{ marginBottom: "2px" }} /> Parents
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/aboutus"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineUser style={{ marginBottom: "2px" }} /> About Us
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/instructors"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <PiStudent style={{ marginBottom: "2px" }} /> Instructors
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    href="http://www.topolympiads.com/seniors.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <FaPersonCane style={{ marginBottom: "2px" }} /> Seniors
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Navbar>

        </>)


}

export default Header;