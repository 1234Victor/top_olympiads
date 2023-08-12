import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import { EditNews } from "./EditNews";
import { AddNews } from "./addNews";

export class AdminNews extends Component {
    constructor(props) {
        super(props);
        this.state = { news: [], editModelShow: false, addModelShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + "News")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network was not ok');
                }
                return response.json()
            })
            .then(data => {
                this.setState({ news: data });
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation: ', error)
            });
    }

    deleteNews(newsid) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'News/' + newsid, {
                method: 'DELETE',
                headers: {
                    'Accept': 'aplication/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }
    render() {
        const { news, newsid, newscontent, newsdate } = this.state;
        let addModelClose = () => this.setState({ addModelShow: false });
        let editModelClose = () => this.setState({ editModelShow: false });
        return (
            <div style={{ marginLeft: "10%", marginRight: "10%" }}>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>NewstId</th>
                            <th>NewsDate</th>
                            <th>NewsContent</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news.map(news =>
                            <tr key={news.NewsId}>
                                <td>{news.NewsId}</td>
                                <td>{news.NewsDate}</td>
                                <td>{news.NewsContent}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Row>
                                            <Col>
                                                <Button className="mr-2" variant="info"
                                                    onClick={() => this.setState({
                                                        editModelShow: true,
                                                        newsid: news.NewsId, newsdate: news.NewsDate, newscontent: news.NewsContent
                                                    })}>
                                                    Edit
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button className="mr-2" variant="danger"
                                                    onClick={() => this.deleteNews(news.NewsId)}>
                                                    Delete
                                                </Button>
                                            </Col>
                                        </Row>
                                        <EditNews show={this.state.editModelShow}
                                            onHide={editModelClose}
                                            NewsId={newsid}
                                            NewsDate={newsdate}
                                            NewsContent={newscontent} />
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModelShow: true })}>
                        Add News
                    </Button>

                    <AddNews show={this.state.addModelShow} onHide={addModelClose}>
                    </AddNews>
                </ButtonToolbar>
            </div>
        )
    }

}