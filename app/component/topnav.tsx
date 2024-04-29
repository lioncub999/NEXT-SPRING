'use client'

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React from "react";

export default function Topnav(props:any) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => props.setCurrentPage('list')}>글목록</Nav.Link>
                    <Nav.Link onClick={() => props.setCurrentPage('insert')}>글쓰기</Nav.Link>
                    <Nav.Link onClick={() => props.setCurrentPage('legend')}>레전드버튼</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}