import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BoardCard from "./newsboardCard";


export class NewsBoard extends Component {

  constructor(props) {
    super(props);
    this.state = { News: [] }
  }

  refreshList() {
    const url = process.env.REACT_APP_API + "News";
    console.log("URL to fetch:", url);
    fetch(process.env.REACT_APP_API + "news")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        this.setState({ News: data.slice(-3).reverse() });
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
    const { News } = this.state;
    return (
      <Container fluid className="board">
        <Row class="borderTitle">
          <Col>
            <h4>News</h4>
          </Col>
        </Row>
        <Row class="borderDisplay">
          {News.map((newsItem) => (
            <BoardCard key={newsItem.NewsId} news={newsItem} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default NewsBoard;