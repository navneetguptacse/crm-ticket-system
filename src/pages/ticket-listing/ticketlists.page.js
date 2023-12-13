import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/breadcrumb.comp";
import { SearchForm } from "../../components/search-form/searchform.comp";
import { TicketTable } from "../../components/table/table.comp";
import tickets from "../../assets/data/mock_data.json";

export const TicketLists = () => {
  const [str, setStr] = useState("");
  const [dispTickets, setDispTickets] = useState(tickets);

  useEffect(() => {}, [str, dispTickets]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    // console.log("value :>> ", value);
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sstr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject?.toLowerCase().includes(sstr.toLowerCase())
    );
    setDispTickets(displayTickets);
    // console.log("displayTickets :>> ", displayTickets);
  };

  return (
    <Container>
      <Row className="mt-5 mb-2">
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Button variant="info">
            Add New Ticket
          </Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <strong>Ticket Lists</strong>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={dispTickets} />
        </Col>
      </Row>
    </Container>
  );
};
