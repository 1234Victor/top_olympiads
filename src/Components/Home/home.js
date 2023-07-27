import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import "./home.css"
import Slide from "../Slide/slide"
import Buttons from "./Buttons/button"
import Board from "./Board/board"
import BoardCard from "./Board/boardCard"
import About from "./About/about"

function Home() {
    return (
        <section>
            <Slide />
            <Container fluid className="home-section home-content" id="home">
                    <Row class = "home-header">
                        <Col md= {4} class = "home-button">
                            <Buttons/>
                        </Col>
                        <Col md= {4} >
                            <Board 
                            title = "News"
                            news1 = {<BoardCard
                                date = "2021-09-01"
                                description = "Placeholder"
                            />}
                            news2 = {<BoardCard
                                date = "2021-09-01"
                                description = "Placeholder"
                            />}
                            news3 = {<BoardCard
                                date = "2021-09-01"
                                description = "Placeholder"
                            />}
                            />
                        </Col>
                        <Col md= {4} >
                            <Board 
                            title = "Announcement"
                            news1 = {<BoardCard
                                date = "2021-09-01"
                                description = "Placeholder"
                            />}
                            news2 = {<BoardCard
                                date = "2021-09-01"
                                description = "Placeholder"
                            />}
                            news3 = {<BoardCard
                                date = "2021-09-01"
                                description = "Placeholder"
                            />}
                            />
                        </Col>
                    </Row>
            </Container>
            <div className="section-content">
                    <About className = "section-about"/>
            </div>
        </section>
    );
}

export default Home;