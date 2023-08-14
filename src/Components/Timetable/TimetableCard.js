import React from "react";
import Card from "react-bootstrap/Card";
import "./TimetableCard.css";
import YouTube from 'react-youtube';
import Button from "react-bootstrap/Button";

function Timetable({ ttable }) {
    return (
        <div className = "background">
        <div className = "content">
            <div style = {{backgroundColor: "white", padding:"2%"}}>
            <Card className="ttable-card-view">
                <Card.Title className="ttable-title"><h3>{ttable.TimetableName}</h3></Card.Title>
                {
                    ttable.PhotoFileName && ttable.PhotoFileName !== "anonymous.png" &&
                    <Card.Img className="ttable-card-img" variant="top" src={process.env.REACT_APP_PHOTOPATH + ttable.PhotoFileName} />
                }
                <Card.Text><div dangerouslySetInnerHTML={{ __html: ttable.TimetableDescription }} /></Card.Text>
            </Card>
            </div>
        </div>
        </div>
    );
}

export default Timetable;