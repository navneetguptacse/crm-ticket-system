import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

export const TicketBedge = ({ tickets }) => {
  const [ticketCount, setTicketCount] = useState({
    total: 0,
    open: 0,
    closed: 0,
    pending: 0,
  });

  useEffect(() => {
    let open = 0,
      closed = 0,
      pending = 0;
    tickets.forEach((row) => {
      if (row.status === "Open") open++;
      else if (row.status === "Closed") closed++;
      else pending++;
    });

    setTicketCount({
      total: tickets.length,
      open: open,
      closed: closed,
      pending: pending,
    });
  }, [tickets]); // Remove `ticketCount` from the dependency array

  return (
    <Container>
      <Table striped bordered>
        <tbody>
          <tr className="text-center">
            <td className="table-info">
              Total Tickets
              <strong> {ticketCount.total}</strong>
            </td>
            <td className="table-danger">
              Open Tickets
              <strong> {ticketCount.open}</strong>
            </td>
            <td className="table-success">
              Closed Tickets
              <strong> {ticketCount.closed}</strong>
            </td>
            <td className="table-warning">
              Pending Tickets
              <strong> {ticketCount.pending}</strong>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
