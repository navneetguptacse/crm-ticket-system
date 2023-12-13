import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/breadcrumb.comp";

export const Ticket = () => {
  return (
    <Container>
      <Row className="mt-5 mb-2">
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="subject">Subject</div>
          <div className="date">Date</div>
          <div className="status">Status</div>
        </Col>
        <Col>
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
    </Container>
  );
};
