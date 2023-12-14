import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/breadcrumb.comp";
import tickets from "../../assets/data/mock_data.json";
import { MsgHistory } from "../../components/msg-history/msghistory.comp";
import { UpdateTicket } from "../../components/update-ticket/updateticket.comp";

const ticket = tickets[0];

export const Ticket = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {}, [message]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    alert("Form Submitted"); // Start here
  };

  return (
    <Container>
      <Row className="mt-5 mb-2">
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-secondary">
          <div className="subject">
            <strong>Subject:</strong> {ticket.subject}
          </div>
          <div className="date">
            <strong>Date:</strong> {ticket.openDate}
          </div>
          <div className="status">
            <strong>Status:</strong> Client Response {ticket.status}
          </div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MsgHistory msg={ticket.history} />
        </Col>
      </Row>
      <hr />
      <UpdateTicket
        msg={message}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </Container>
  );
};
