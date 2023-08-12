import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {Introduction} from "./About"
import "./Olympiads.css"
import { Competition } from "./Competitions"

function Olympiads() {
    return(
        <div className = "background">
            <div className = "content">
                <Introduction calssName = "section-about"/>
            </div>
            <br/>
            <div className = "content">
                <Competition />
            </div>
        </div>
        
    )
}

export default Olympiads;