import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about1.css";
import { RiH3, RiH5 } from "react-icons/ri";
import runze1 from "../../Assets/runze1.png";
import runze2 from "../../Assets/runze2.png";
import runze3 from "../../Assets/runze4.png";

export class About2 extends Component {
    render() {
        return (
            <div className="about-section">
                <Row style={{ paddingLeft: "2%", paddingRight: "2%", textAlign: "center" }}>
                    <h3 class="titleAbout">Wherever You Are, Wherever You Go !
                        Top Olympiads Center will have a program with you!
                    </h3>
                </Row>
                <Row className="about-content" style={{ paddingLeft: "2%", paddingRight: "2%", textAlign:"center" }}>
                    <h5 style={{textAlign:"center" }}><br />
                        Top Olympiads Center began with our organizer Run Ze Cao and his parents' various realizations. Run Ze thanks his parents for helping him achieve multiple participations as a member of Team Canada, winning two gold and one silver medals at the International Olympiads, achieving national first place many times in different subjects, and maintaining a healthy, outgoing personality while remaining diverse enough in abilities and interests to graduate from high school as Top Scholar in the Toronto District School Board.
                    </h5>
                </Row>
                <br/>
                <Row className="about-content" style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                    <Col md = {4}>
                        <div className="d-flex justify-content-center">
                            <img src={runze1} alt="about1" className="img-fluid"/>
                            
                        </div>
                        <br/>
                        <div className="d-flex justify-content-center">
                            <img src={runze2} alt="about1" className="img-fluid"/>
                        </div>
                        <br/>
                        <div className="d-flex justify-content-center">
                            <img src={runze3} alt="about1" className="img-fluid"/>
                        </div>
                    </Col>
                    <Col md = {8}>
                    <p className="about-text">
                        Run Ze's achievements and persona grabbed the attention of the University of Pennsylvania, the Ivy League university he found most interesting. He managed to obtain a Teaching Assistant position in short order and helped numerous students with their course work.
                        <br /><br />
                        Due to Run Ze's previous achievements in the Canadian Physics Olympiad, in 2015, he was one of the leaders and trainers of Team Canada and took the team to Mumbai, India, where they participated in the 46th International Physics Olympiad.
                        <br /><br />
                        In his third year at university, Run Ze decided to try one of the hardest exams in the United States, the MCAT (Medical College Admissions Test) and scored at the 99.9th percentile (i.e. higher than 99.9% of test-takers). From then on, his tutoring extended to students who were preparing for the MCAT. He finds teaching very enjoyable and hopes to convey his teaching experience to more bright students, and together with them create something glorious.
                        <br /><br />
                        Many parents, wanting the best for their children, came to us due to hearing of his achievements, asking for information about the cultivation and education of children. And so we aided many smart children, helping them into elite schools. Observing that our matured educational experience and advanced learning methods brought the joy of success to many children, we felt that more kids should benefit, and so to help more children achieve the best they can, to help them into and through elite universities, we created Top Olympiads Center.
                        <br /><br />
                        We want to use our successful and plentiful teaching experience to help children to achieve the best they possibly can, to dodge detours on their path of growth, to establish a solid foundation for a radiant future, to become the top people in their chosen fields, and thus achieve satisfaction in their lives.
                        <br /><br />
                        Following Run Ze Cao, you will have the opportunity to create your own legend.
                        <br /><br />
                        Please note that all of Run Ze Cao's achievements originated from his own efforts and his parents' direct cultivation, if other organizations or people attempt to use his name in advertising, please do not be deceived by their false claim.
                    </p>
                    </Col>
                </Row>
            </div>
        )
    }
}