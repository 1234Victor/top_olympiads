import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./newsBoard.css";

function BoardCard({news}) {
    return (
        <Card className="board-card-view">
            <Card.Body>
                <Card.Text>
                    <span>{news.NewsDate}</span>
                </Card.Text>
                <Card.Text style = {{textAlign: "justify"}}>
                    <h6>{news.NewsContent}</h6>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BoardCard;
