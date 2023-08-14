import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import { EditAnnoucements } from "./EditAnnoucements.js";
import { AddAnnoucements } from "./addAnnoucements.js";
import AdminHeader from "../../../AdminHeader/adminHeader.js";

export class AdminAnnoucements extends Component {
    constructor(props) {
        super(props);
        this.state = { Annoucements: [], editModelShow: false, addModelShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + "Annoucements")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network was not ok');
                }
                return response.json()
            })
            .then(data => {
                this.setState({ Annoucements: data });
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation: ', error)
            });
    }

    deleteAnnoucements(Annoucementsid) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'Annoucements/' + Annoucementsid, {
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
        const { Annoucements, Annoucementsid, Annoucementscontent, Annoucementsdate } = this.state;
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
                                        <th>AnnoucementstId</th>
                                        <th>AnnoucementsDate</th>
                                        <th>AnnoucementsContent</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Annoucements.map(Annoucements =>
                                        <tr key={Annoucements.AnnoucementsId}>
                                            <td>{Annoucements.AnnoucementsId}</td>
                                            <td>{Annoucements.AnnoucementsDate}</td>
                                            <td>{Annoucements.AnnoucementsContent}</td>
                                            <td>
                                                <ButtonToolbar>
                                                    <Row>
                                                        <Col>
                                                            <Button className="mr-2" variant="info"
                                                                onClick={() => this.setState({
                                                                    editModelShow: true,
                                                                    Annoucementsid: Annoucements.AnnoucementsId, Annoucementsdate: Annoucements.AnnoucementsDate, Annoucementscontent: Annoucements.AnnoucementsContent
                                                                })}>
                                                                Edit
                                                            </Button>
                                                        </Col>
                                                        <Col>
                                                            <Button className="mr-2" variant="danger"
                                                                onClick={() => this.deleteAnnoucements(Annoucements.AnnoucementsId)}>
                                                                Delete
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                    <EditAnnoucements show={this.state.editModelShow}
                                                        onHide={editModelClose}
                                                        AnnoucementsId={Annoucementsid}
                                                        AnnoucementsDate={Annoucementsdate}
                                                        AnnoucementsContent={Annoucementscontent} />
                                                </ButtonToolbar>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>

                            <ButtonToolbar>
                                <Button variant='primary'
                                    onClick={() => this.setState({ addModelShow: true })}>
                                    Add Annoucements
                                </Button>

                                <AddAnnoucements show={this.state.addModelShow} onHide={addModelClose}>
                                </AddAnnoucements>
                            </ButtonToolbar>
                        </div>
                    </Col>
                </Row>
            </div>

        )
    }

}