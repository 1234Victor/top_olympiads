import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import "./home.css"
import Slide from "../Slide/slide"

function Home() {
    return (
        <section>
            <Slide />
            <Container fluid className="home-section" id="home">
                
                <Container className="home-content">
                    <Row class = "home-header">
                        hhhhhhh
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;