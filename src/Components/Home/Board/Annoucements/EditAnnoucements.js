import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditAnnoucements extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Annoucements', {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                AnnoucementsId: event.target.AnnoucementsId.value,
                AnnoucementsDate: event.target.AnnoucementsDate.value,
                AnnoucementsContent: event.target.AnnoucementsContent.value
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
                            Edit Annoucements
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="AnnoucementsId">
                                    <Form.Label>AnnoucementsId</Form.Label>
                                    <Form.Control type="text" name="AnnoucementsId" required
                                        disabled
                                        defaultValue={this.props.AnnoucementsId}
                                        placeholder="AnnoucementsId" />
                                </Form.Group>

                                <Form.Group controlId="AnnoucementsDate">
                                    <Form.Label>AnnoucementsDate</Form.Label>
                                    <Form.Control type="text" name="AnnoucementsDate" required
                                        defaultValue={this.props.AnnoucementsDate}
                                        placeholder="AnnoucementsDate" />
                                </Form.Group>

                                <Form.Group controlId="AnnoucementsContent">
                                    <Form.Label>AnnoucementsContent</Form.Label>
                                    <Form.Control type="text" name="AnnoucementsContent" required
                                        defaultValue={this.props.AnnoucementsContent}
                                        placeholder="AnnoucementsContent" />
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Update Annoucements
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