import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/table/table.comp";
import tickets from "../../assets/data/mock_data.json";

export const Dashboard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center mt-5 mb-2">
            <Button variant="info" type="submit" className="br-0">
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

        <Row>
          <Col className="text-center mt-5 mb-2">
            <div>Total Tickets: 50</div>
            <div>Pending Tickets: 50</div>
          </Col>
        </Row>

        <Row>
          <Col className="mt-5 mb-2">Recently Added Tickets</Col>
        </Row>
        <hr />
        <Row>
          <Col className="recent-ticket mt-0 mb-2">
            <TicketTable tickets={tickets} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
