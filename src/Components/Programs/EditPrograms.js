import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export class EditPrograms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProgramsDescription: props.ProgramsDescription || ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEditorChange = (event, editor) => {
        const data = editor.getData();
        this.setState({ ProgramsDescription: data });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'programs', {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProgramsId: event.target.ProgramsId.value,
                ProgramsName: event.target.ProgramsName.value,
                ProgramsDescription: this.state.ProgramsDescription
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
                            Edit Programs
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="ProgramsId">
                                    <Form.Label>Programs Id</Form.Label>
                                    <Form.Control type="text" name="ProgramsId" required
                                        disabled
                                        defaultValue={this.props.ProgramsId}
                                        placeholder="ProgramsId" />
                                </Form.Group>

                                <Form.Group controlId="ProgramsName">
                                    <Form.Label>Programs Name</Form.Label>
                                    <Form.Control type="text" name="ProgramsName" required
                                        defaultValue={this.props.ProgramsName}
                                        placeholder="ProgramsName" />
                                </Form.Group>

                                <Form.Group controlId="ProgramsDescription">
                                    <Form.Label>Programs Description</Form.Label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={this.props.ProgramsDescription}
                                        onChange={this.handleEditorChange}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Update Programs
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
