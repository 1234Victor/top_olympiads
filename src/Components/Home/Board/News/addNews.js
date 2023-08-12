import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'



export class AddNews extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'News', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                NewsId: null,
                NewsDate: event.target.NewsDate.value,
                NewsContent: event.target.NewsContent.value
            })
        })
        .then(res => res.json())
        .then((result) => {
            alert(result);
        },
        (error) => {
            alert('Failed')
        })
    }
    render() {
        return (
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-model-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add News
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="NewsDate">
                                        <Form.Label>News Date</Form.Label>
                                        <Form.Control type="text" name="NewsDate" required
                                            placeholder="NewsDate" />
                                    </Form.Group>
                                    <Form.Group controlId="NewsContent">
                                        <Form.Label>News Content</Form.Label>
                                        <Form.Control type="text" name="NewsContent" required
                                            placeholder="NewsContent" />
                                    </Form.Group>
                                    <br/>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add News
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}