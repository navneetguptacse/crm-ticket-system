import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/table/table.comp";
import tickets from "../../assets/data/mock_data.json";
import { PageBreadcrumb } from "../../components/breadcrumb/breadcrumb.comp";
import { TicketBedge } from "../../components/ticket-bedges/ticket.bedge";

export const Dashboard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center mt-5 mb-2">
            <PageBreadcrumb page="Dashboard" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center my-5">
            <Button variant="info" type="submit">
              <div>
                <img
                  src="https://img.icons8.com/ios/60/ffffff/plus.png"
                  alt="add"
                  className="mx-5 my-2"
                />
              </div>
              Add New Ticket
            </Button>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>Ticket Statistics</Col>
        </Row>
        <hr />
        <Row>
          <Col className="recent-ticket mt-3 mb-5 p-0">
            <TicketBedge tickets={tickets} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>Recently Added Tickets</Col>
        </Row>
        <hr />
        <Row>
          <Col className="recent-ticket mt-3 mb-2">
            <TicketTable tickets={tickets} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
