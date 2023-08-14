import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export class AddPrograms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProgramsDescription: this.props.ProgramsDescription || '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEditorChange = (event, editor) => {
        const data = editor.getData();
        this.setState({ ProgramsDescription: data });
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'programs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProgramsId: null,
                ProgramsName: event.target.ProgramsName.value,
                ProgramsDescription: this.state.ProgramsDescription,
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
                            Add Programs
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="ProgramsName">
                                        <Form.Label>Program Name</Form.Label>
                                        <Form.Control type="text" name="ProgramsName" required
                                            placeholder="ProgramsName" />
                                    </Form.Group>
                                    <Form.Group controlId="ProgramsDescription">
                                        <Form.Label>Program Description</Form.Label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={this.state.ProgramsDescription}
                                            onChange={this.handleEditorChange}
                                            style={{ minHeight: '300px' }}
                                        />
                                    </Form.Group>
                                    <br/>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Programs
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