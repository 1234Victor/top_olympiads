import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export class EditTimetable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TimetableDescription: this.props.TimetableDescription || '',
            photofilename: this.props.PhotoFileName || 'anonymous.png',
            imagesrc: process.env.REACT_APP_PHOTOPATH + encodeURIComponent(this.props.PhotoFileName || 'anonymous.png')

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }
    
    refreshList() {
        fetch(process.env.REACT_APP_API + "Timetable")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network was not ok');
                }
                return response.json()
            })
            .then(data => {
                this.setState({ 
                TimetableDescription: this.props.TimetableDescription || '',
                photofilename: this.props.PhotoFileName || 'anonymous.png',
                imagesrc: process.env.REACT_APP_PHOTOPATH + encodeURIComponent(this.props.PhotoFileName || 'anonymous.png') });
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation: ', error)
            });
    }

    componentDidMount() {
        this.refreshList()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.TimetableDescription !== this.props.TimetableDescription || prevProps.PhotoFileName !== this.props.PhotoFileName) {
            this.refreshList();
        }
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
                PhotoFileName: this.state.photofilename
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
        const newPhotoFilename = event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            newPhotoFilename
        );

        fetch(process.env.REACT_APP_API + 'Timetable/SaveFile', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    photofilename: newPhotoFilename,
                    imagesrc: process.env.REACT_APP_PHOTOPATH + encodeURIComponent(result)
                });
            },
                (error) => {
                    alert('Failed');
                });
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
                            Edit Timetable
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={8}>
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
                                            data={this.state.TimetableDescription}
                                            onChange={this.handleEditorChange}
                                            style={{ minHeight: '300px' }}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Timetable
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col sm={4}>
                                <Image
                                    width="200px"
                                    height="200px"
                                    src={this.state.imagesrc}
                                />
                                <input type="File" accept=".jpg, .jpeg, .png" onChange={this.handleFileSelected}  />
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
