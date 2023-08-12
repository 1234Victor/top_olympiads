import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./about.css";
import mathComp from "../../Assets/mathComp.png";
import mathComp1 from "../../Assets/mathComp1.png";
import computerComp from "../../Assets/computerComp.png";
import scienceComp from "../../Assets/scienceComp.png";

export class Competition extends Component{
    render(){
        return(
            <div className ="img-background">
            <h2 style={{textAlign: "center",fontSize: "20", paddingBottom: "2%"}}>The Major Competitions and Contests</h2>
            <div>
                <img src = {mathComp} alt="math Conteset Canadian" width="100%" height="100%" style = {{paddingBottom: "2%"}}/>
                <img src = {mathComp1} alt="math Conteset Canadian" width="100%" height="100%" style = {{paddingBottom: "2%"}}/>
                <img src = {computerComp} alt="math Conteset Canadian" width="100%" height="100%" style = {{paddingBottom: "2%"}}/>
                <img src = {scienceComp} alt="math Conteset Canadian" width="100%" height="100%"/>
            </div>
            </div>
        )
    }
}