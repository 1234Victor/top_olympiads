import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./board.css";

function BoardCard(props) {
    return (
        <Card className="board-card-view">
            <Card.Body>
                <Card.Text>
                    <span style = {{fontsize: "50%", fontColor: "gray"}}>{props.date}</span>
                </Card.Text>
                <Card.Text style = {{textAlign: "justify"}}>
                    <h6>{props.description}</h6>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BoardCard;