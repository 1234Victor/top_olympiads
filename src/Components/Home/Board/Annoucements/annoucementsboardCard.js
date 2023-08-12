import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./AnnoucementsBoard.css";

function BoardCard({Annoucements}) {
    return (
        <Card className="board-card-view">
            <Card.Body>
                <Card.Text>
                    <span>{Annoucements.AnnoucementsDate}</span>
                </Card.Text>
                <Card.Text style = {{textAlign: "justify"}}>
                    <h6>{Annoucements.AnnoucementsContent}</h6>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BoardCard;
