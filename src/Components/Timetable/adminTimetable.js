import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import { EditTimetable } from "./EditTimetable";
import { AddTimetable } from "./addTimetable";
import AdminHeader from "../AdminHeader/adminHeader.js";

export class AdminTimetable extends Component {
    constructor(props) {
        super(props);
        this.state = { Timetable: [], editModelShow: false, addModelShow: false }
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
                this.setState({ Timetable: data });
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation: ', error)
            });
            console.log(process.env.REACT_APP_API + "Timetable")
    }

    deleteTimetable(Timetableid) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'Timetable/' + Timetableid, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
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
        
        const { Timetable, Timetableid, Timetablename, Timetabledescription, Photofilename } = this.state;
        let addModelClose = () => this.setState({ addModelShow: false });
        let editModelClose = () => this.setState({ editModelShow: false });
        return ( 
        <div>
            <Row>
                <Col md={2}>
                    <AdminHeader />
                </Col>
                <Col md={10}>
                    <div style={{ marginLeft: "2%", marginRight: "2%" }}>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>TimetabletId</th>
                            <th>TimetableName</th>
                            <th>TimetableDescription</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Timetable.map(Timetable =>{
                            //console.log(Timetable.PhotoFileName);
                            return(
                            <tr key={Timetable.TimetableId}>
                                <td>{Timetable.TimetableId}</td>
                                <td>{Timetable.TimetableName}</td>
                                <td><div dangerouslySetInnerHTML={{ __html: Timetable.TimetableDescription }} /></td>
                                <td>
                                    <ButtonToolbar>
                                        <Row>
                                            <Col>
                                                <Button className="mr-2" variant="info"
                                                    onClick={() => this.setState({
                                                        editModelShow: true,
                                                        Timetableid: Timetable.TimetableId, Timetablename: Timetable.TimetableName, Timetabledescription: Timetable.TimetableDescription, Photofilename: Timetable.PhotoFileName
                                                    })}>
                                                    Edit
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button className="mr-2" variant="danger"
                                                    onClick={() => this.deleteTimetable(Timetable.TimetableId)}>
                                                    Delete
                                                </Button>
                                            </Col>
                                        </Row>
                                        <EditTimetable show={this.state.editModelShow}
                                            onHide={editModelClose}
                                            TimetableId={Timetableid}
                                            TimetableName={Timetablename}
                                            TimetableDescription={Timetabledescription} 
                                            PhotoFileName = {Photofilename}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>);
                        })}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModelShow: true })}>
                        Add Timetable
                    </Button>

                    <AddTimetable show={this.state.addModelShow} onHide={addModelClose}>
                    </AddTimetable>
                </ButtonToolbar>
            </div>
            </Col>
            </Row>
            </div>
        )
    }

}