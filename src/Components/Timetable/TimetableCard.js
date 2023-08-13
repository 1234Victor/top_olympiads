import React from "react";
import Card from "react-bootstrap/Card";
import "./ttableCard.css";
import Button from "react-bootstrap/Button";

function Timetable({ttable}){
        return(
            <div>
                <Card className = "ttable-card-view">
                    <Card.Title className = "ttable-title"><h3>{ttable.TimetableName}</h3></Card.Title>
                    <Card.Text><div dangerouslySetInnerHTML={{ __html: ttable.TimetableDescription }} /></Card.Text>
                </Card>
                <div className = "line-separator" />
            </div>
        );
}

export default Timetable;