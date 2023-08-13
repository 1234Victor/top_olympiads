import React from "react";
import Card from "react-bootstrap/Card";
import "./ProgramCard.css";
import Button from "react-bootstrap/Button";

function Programs({program}){
        return(
            <div>
                <Card className = "program-card-view">
                    <Card.Title className = "program-title"><h3>{program.ProgramsName}</h3></Card.Title>
                    <Card.Text><div dangerouslySetInnerHTML={{ __html: program.ProgramsDescription }} /></Card.Text>
                </Card>
                <div className = "line-separator" />
            </div>
        );
}

export default Programs;