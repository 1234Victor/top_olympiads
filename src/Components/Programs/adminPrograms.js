import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import { EditPrograms } from "./EditPrograms";
import { AddPrograms } from "./addPrograms";
import AdminHeader from "../AdminHeader/adminHeader.js";

export class AdminPrograms extends Component {
    constructor(props) {
        super(props);
        this.state = { programs: [], editModelShow: false, addModelShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + "programs")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network was not ok');
                }
                return response.json()
            })
            .then(data => {
                this.setState({ programs: data });
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation: ', error)
            });
    }

    deletePrograms(programsid) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'programs/' + programsid, {
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
        const { programs, programsid, programsname, programsdescription } = this.state;
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
                                        <th>ProgramstId</th>
                                        <th>ProgramsName</th>
                                        <th>ProgramsDescription</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {programs.map(programs =>
                                        <tr key={programs.ProgramsId}>
                                            <td>{programs.ProgramsId}</td>
                                            <td>{programs.ProgramsName}</td>
                                            <td><div dangerouslySetInnerHTML={{ __html: programs.ProgramsDescription }} /></td>
                                            <td>
                                                <ButtonToolbar>
                                                    <Row>
                                                        <Col>
                                                            <Button className="mr-2" variant="info"
                                                                onClick={() => this.setState({
                                                                    editModelShow: true,
                                                                    programsid: programs.ProgramsId, programsname: programs.ProgramsName, programsdescription: programs.ProgramsDescription
                                                                })}>
                                                                Edit
                                                            </Button>
                                                        </Col>
                                                        <Col>
                                                            <Button className="mr-2" variant="danger"
                                                                onClick={() => this.deletePrograms(programs.ProgramsId)}>
                                                                Delete
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                    <EditPrograms show={this.state.editModelShow}
                                                        onHide={editModelClose}
                                                        ProgramsId={programsid}
                                                        ProgramsName={programsname}
                                                        ProgramsDescription={programsdescription} />
                                                </ButtonToolbar>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>

                            <ButtonToolbar>
                                <Button variant='primary'
                                    onClick={() => this.setState({ addModelShow: true })}>
                                    Add Programs
                                </Button>

                                <AddPrograms show={this.state.addModelShow} onHide={addModelClose}>
                                </AddPrograms>
                            </ButtonToolbar>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

}