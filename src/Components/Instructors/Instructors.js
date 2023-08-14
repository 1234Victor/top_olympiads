import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { InstructorCard } from "./InstructorCard"
import "./instructors.css"

function Instructors() {
    return (
        <div className="background">
            <div className = "instructorTitle">
                RUNZE CAO
            </div>
            <div className="content">
                <InstructorCard />
            </div>
        </div>
    )
}

export default Instructors;