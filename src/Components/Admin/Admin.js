import React, { Component } from "react"; 
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import AdminHeader from "../AdminHeader/adminHeader.js";
import logoBlack from "../../Assets/logoBlack.png"
import "./admin.css"

export class Admin extends Component {

    render() {
        return(
            <div>
                <Row>
                    <Col md={2}>
                        <AdminHeader />
                    </Col>
                    <Col md={10}>
                        <div style={{ marginLeft: "2%", marginRight: "2%" }}>
                            <p className = "adminTitle" style = {{paddingTop: "2%"}}>Welcome to the Admin Panel</p>
                            <img src={logoBlack} alt="logo" className = "adminImage"/>
                        </div>
                    </Col>
                </Row>
            </div>
        )

    }

}