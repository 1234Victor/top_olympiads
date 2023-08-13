import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export class EditTimetable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TimetableDescription: this.props.TimetableDescription || '',
            PhotoFileName: this.props.PhotoFileName || ''
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }

    handleEditorChange = (event, editor) => {
        const data = editor.getData();
        this.setState({ TimetableDescription: data });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Timetable', {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                TimetableId: event.target.TimetableId.value,
                TimetableName: event.target.TimetableName.value,
                TimetableDescription: this.state.TimetableDescription,
                PhotoFileName: this.state.PhotoFileName
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert('Success');
            }, (error) => {
                alert('Failed');
            })
    }
    handleFileSelected(event) {
        event.preventDefault();

        const fileName = event.target.files[0].name;
        const formData = new FormData();
        formData.append("myFile", event.target.files[0], fileName);

        fetch(process.env.REACT_APP_API + 'Timetable/SaveFile', {
            method: 'POST',
            body: formData
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((result) => {
                // If you expect some result from your API after successful file upload, you can handle it here
            })
            .catch(error => {
                alert('Failed to upload the file');
            });

        this.setState({ PhotoFileName: fileName });
    }


    render() {
        console.log(this.state.PhotoFileName);
        return (
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-model-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Timetable
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="TimetableId">
                                        <Form.Label>Timetable Id</Form.Label>
                                        <Form.Control type="text" name="TimetableId" required
                                            disabled
                                            defaultValue={this.props.TimetableId}
                                            placeholder="TimetableId" />
                                    </Form.Group>

                                    <Form.Group controlId="TimetableName">
                                        <Form.Label>Timetable Name</Form.Label>
                                        <Form.Control type="text" name="TimetableName" required
                                            defaultValue={this.props.TimetableName}
                                            placeholder="TimetableName" />
                                    </Form.Group>

                                    <Form.Group controlId="TimetableDescription">
                                        <Form.Label>Timetable Description</Form.Label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={this.props.TimetableDescription}
                                            onChange={this.handleEditorChange}
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Timetable
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col sm={6}>
                                <Image
                                    width="200px"
                                    height="200px"
                                    src={process.env.REACT_APP_PHOTOPATH + encodeURIComponent(this.props.PhotoFileName)}
                                //src = {"https://localhost:44338/Photos/testset.png"}
                                />
                                <input onChange={this.handleFileSelected} type="File" />
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
