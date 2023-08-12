import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditNews extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'News', {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                NewsId: event.target.NewsId.value,
                NewsDate: event.target.NewsDate.value,
                NewsContent: event.target.NewsContent.value
            })
        })
        .then(res => res.json())
        .then((result) => {
            alert('Success');
        }, (error) => {
            alert('Failed');
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
                            Edit News
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="NewsId">
                                    <Form.Label>NewsId</Form.Label>
                                    <Form.Control type="text" name="NewsId" required
                                        disabled
                                        defaultValue={this.props.NewsId}
                                        placeholder="NewsId" />
                                </Form.Group>

                                <Form.Group controlId="NewsDate">
                                    <Form.Label>NewsDate</Form.Label>
                                    <Form.Control type="text" name="NewsDate" required
                                        defaultValue={this.props.NewsDate}
                                        placeholder="NewsDate" />
                                </Form.Group>

                                <Form.Group controlId="NewsContent">
                                    <Form.Label>NewsContent</Form.Label>
                                    <Form.Control type="text" name="NewsContent" required
                                        defaultValue={this.props.NewsContent}
                                        placeholder="NewsContent" />
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Update News
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