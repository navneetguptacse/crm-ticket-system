import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h1 className="display-4">404 - Not Found</h1>
          <p className="lead">The page you are looking for does not exist.</p>
          <Link to="/">
            <Button variant="info">Go to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
