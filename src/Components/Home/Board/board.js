import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BoardCard from "./boardCard";

function Board(props) {
  return (
    <Container fluid className="board">
      <Row class = "borderTitle">
        <Col>
          <h4>{props.title}</h4>
        </Col>
      </Row>
      <Row class = "borderDisplay">
        {props.news1}
        {props.news2}
        {props.news3}
      </Row>
    </Container>
  );
}

export default Board;