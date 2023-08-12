import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BoardCard from "./annoucementsboardCard.js";


export class AnnoucementsBoard extends Component {

  constructor(props) {
    super(props);
    this.state = { Annoucements: [] }
  }

  refreshList() {
    const url = process.env.REACT_APP_API + "Annoucements";
    console.log("URL to fetch:", url);
    fetch(process.env.REACT_APP_API + "Annoucements")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        this.setState({ Annoucements: data.slice(-3).reverse() });
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  render() {
    const { Annoucements } = this.state;
    return (
      <Container fluid className="board">
        <Row class="borderTitle">
          <Col>
            <h4>Annoucements</h4>
          </Col>
        </Row>
        <Row class="borderDisplay">
          {Annoucements.map((AnnoucementsItem) => (
            <BoardCard key={AnnoucementsItem.AnnoucementsId} Annoucements={AnnoucementsItem} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default AnnoucementsBoard;