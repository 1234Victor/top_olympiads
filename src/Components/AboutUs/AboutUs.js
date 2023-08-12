import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {About1} from "./About1"
import {About2} from "./About2"
import "./AboutUs.css"

function AboutUs() {
    return(
        <div className = "background">

                <About1 calssName = "section-about"/>

            <br />
            <div className = "content">
                <About2 calssName = "section-about"/>
            </div>
        </div>
        
    )
}

export default AboutUs;