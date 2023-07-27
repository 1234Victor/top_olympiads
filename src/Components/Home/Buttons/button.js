import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./button.css";
import button1 from "../../../Assets/button.png";
import button2 from "../../../Assets/button1.png";
import button3 from "../../../Assets/button2.png";

function ImageButton() {
    return (
        <Container>
            <Row>
                <a href="http://www.topolympiads.com/free-math-1-8.html" target="_blank"  rel="noopener noreferrer" class="buttonImg">
                    <img src={button1} alt="Gr1 - Gr8 Free Math" class="imgButton" />
                </a>
            </Row>
            <Row>
            <a href="http://www.topolympiads.com/free-math-1-8.html" target="_blank"class="buttonImg">
                    <img src={button2} alt="Gr9 - Gr12 All Online Courses" class="imgButton" />
            </a>
            </Row>
            <Row>
            <a href="http://www.topolympiads.com/free-math-1-8.html" target="_blank"class="buttonImg">
                    <img src={button3} alt="Comunity activity English for Senior, Newcomer" class="imgButton" />
            </a>
            </Row>

        </Container>
    )
}
export default ImageButton;