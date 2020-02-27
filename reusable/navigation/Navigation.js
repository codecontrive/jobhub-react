import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">JobHub Romania</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Jobs</Nav.Link>
        <Nav.Link href="#pricing">For Companies</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  );
};
