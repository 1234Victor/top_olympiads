import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./button.css";
import { BiMath } from "react-icons/bi";
import { TbMathIntegralX } from "react-icons/tb";
import {RiEnglishInput} from "react-icons/ri";


function ImageButton() {
    return (
        <Container>
            <Row>
            <a href="https://runzeworld.com/" target="_blank" rel="noopener noreferrer">
                <Button className="custom-button">
                    <Row>
                    <Col md={2}>
                        <BiMath size={50} className = "centerIcon"/>
                    </Col>
                    <Col md={8}>
                        Grade 1-Grade 8<br/> Free Math
                    </Col>
                    </Row>
                </Button>
                </a>
            </Row>
            <br />
            <Row>
                <a href="https://runzeworld.com/" target="_blank" rel="noopener noreferrer">
                <Button className="custom-button">
                    <Row>
                    <Col md={2}>
                        <TbMathIntegralX size={50} className = "centerIcon" />
                    </Col>
                    <Col md={8}>
                    Grade 9 - Grade 12<br/> All Online Courses
                    </Col>
                    </Row>
                </Button>
                </a>
            </Row>
            
            <br />
            <Row>
                <a href="http://www.topolympiads.com/seniors.html" target="_blank" rel="noopener noreferrer">
                <Button className="custom-button">
                    <Row>
                    <Col md={2}>
                        <RiEnglishInput size={50} className = "centerIcon"/>
                    </Col>
                    <Col md={8}>
                        Comunity Activity, English for Seniors, Newcomers
                    </Col>
                    </Row>
                </Button>
                </a>
            </Row>

        </Container>
    )
}
export default ImageButton;