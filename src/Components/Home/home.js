import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css"
import Slide from "../Slide/slide"
import Buttons from "./Buttons/button"
import NewsBoard from "./Board/News/newsboard"
import AnnoucementsBoard from "./Board/Annoucements/annoucementsboard"
import BoardCard from "./Board/News/newsboardCard"
import About from "./About/about"


function Home() {
    return (
        <section>
            <Slide />
            <Container fluid className="home-section home-content" id="home">
                <Row class="home-header">
                    <Col md={4} class="home-button">
                        <Buttons />
                    </Col>
                    <Col md={4} >
                        <NewsBoard/>
                    </Col>
                    <Col md={4} >
                        <AnnoucementsBoard/>
                    </Col>
                </Row>
            </Container>
            <div className="section-content">
                <About className="section-about" />
            </div>
        </section>
    );
}

export default Home;