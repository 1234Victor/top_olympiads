import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'



export class AddAnnoucements extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Annoucements', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                AnnoucementsId: null,
                AnnoucementsDate: event.target.AnnoucementsDate.value,
                AnnoucementsContent: event.target.AnnoucementsContent.value
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
                            Add Annoucements
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="AnnoucementsDate">
                                        <Form.Label>Annoucements Date</Form.Label>
                                        <Form.Control type="text" name="AnnoucementsDate" required
                                            placeholder="AnnoucementsDate" />
                                    </Form.Group>
                                    <Form.Group controlId="AnnoucementsContent">
                                        <Form.Label>Annoucements Content</Form.Label>
                                        <Form.Control type="text" name="AnnoucementsContent" required
                                            placeholder="AnnoucementsContent" />
                                    </Form.Group>
                                    <br/>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Annoucements
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