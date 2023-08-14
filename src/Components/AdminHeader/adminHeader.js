import React, { useState } from "react"; // Fixed the typo for useState
import { Navbar, Nav } from "react-bootstrap"; // Removed unused imports
import { Link } from "react-router-dom";
import {BiNews} from "react-icons/bi";
import {FaBullhorn} from "react-icons/fa";
import {FaChalkboardTeacher} from "react-icons/fa";
import {SlCalender} from "react-icons/sl";
import {LuPanelLeftInactive} from "react-icons/lu";

function AdminHeader() {
    const [expand, updateExpanded] = useState(false);

    return (
        <Navbar className="">
            <Nav className="flex-column" defaultActiveKey="#admin">
                <Nav.Item>
                    <Nav.Link as={Link} to="/admin" onClick={() => updateExpanded(false)}>
                    <LuPanelLeftInactive style={{ marginBottom: "2px" }} /> Admin Panel
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/admin/news" onClick={() => updateExpanded(false)}>
                    <BiNews style={{ marginBottom: "2px" }} /> Manage News
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        as={Link}
                        to="/admin/annoucements"
                        onClick={() => updateExpanded(false)}
                    >
                        <FaBullhorn style={{ marginBottom: "2px" }} /> Manage Annoucements
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        as={Link}
                        to="/admin/programs"
                        onClick={() => updateExpanded(false)}
                    >
                         <FaChalkboardTeacher style={{ marginBottom: "2px" }} /> Manage Programs
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        as={Link}
                        to="/admin/timetable"
                        onClick={() => updateExpanded(false)}
                    >
                        <SlCalender style={{ marginBottom: "2px" }} /> Manage Timetable
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default AdminHeader;
