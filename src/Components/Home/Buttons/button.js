import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./button.css";


function ImageButton() {
    return (
        <Container>
            <Row>
            <Button className = "custom-button">Grade 1-Grade 8<br/> Free Math</Button>
            </Row>
            <br/>
            <Row>
            <Button className = "custom-button">Grade 9 - Grade 12<br/> All Online Courses</Button>
            </Row>
            <br/>
            <Row>
            <Button className = "custom-button">Comunity Activity <br/> English for Seniors, Newcomers</Button>
            </Row>

        </Container>
    )
}
export default ImageButton;