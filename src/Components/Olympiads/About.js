import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./about.css";

export class Introduction extends Component{
    render(){
        return(
            <div className="about-section">
                <Row style = {{paddingLeft:"2%", paddingRight:"2%"}}>
                    <h2  class="about-title">Welcome to TOP Olympiads</h2>
                </Row>
                <Row className="about-content" style = {{paddingLeft:"2%", paddingRight:"2%"}}>
                    <p className="about-text"><br/>
                    Every parent wishes for their children to excel academically, and participating in the Olympiads—the academic counterpart of the Olympics (though held yearly)—is the ultimate goal of many, many students and parents. Although each year in each nation there can only be a limited few students who would prevail in the fierce competition for the glory of representing their nation, still many children strive toward these paragons of academia.
                    <br/><br/>
                    The results from the efforts of these students will be extremely important to university admissions. Olympiad participants and those with awards from other major competitions naturally have a very easy time being admitted to any university compared to other students. Any participant in the International Olympiads hailing from a North American country has guaranteed admissions and scholarship or grant money at famous universities, and most enter the Ivy League (Harvard, Princeton, etc.) or comparably top-tier institutions. In a sense, an International Olympiad medal can almost function as an entry visa to the Ivy League or other elite universities. In Europe, Olympiad participants are similarly admitted to their top universities, and in most Asian countries students will have a full scholarship to the highest ranked universities in their country, the choice of which to attend being left up to the student and his or her family.
                    <br/><br/>
                    According to our experiences, parents and children must have the following points for good results in Olympiads or even normal contests to be possible, in terms of percentage contribution to success they are:
                    <br/><br/>
                    1. 90% The child's intelligence must be relatively high <br/>
                    2. 5% Parents must be able to make every possible effort, physical, mental and monetary, to support their child. <br/>
                    3. 5% A good teacher who can aid the child's learning, without detours
                    </p>
                </Row>
            </div>
        )
    }
}