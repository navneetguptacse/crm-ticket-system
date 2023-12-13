import React from "react";
import { Table } from "react-bootstrap";

export const TicketTable = ({ tickets }) => {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Matter</th>
          <th>Status</th>
          <th>Opened Date</th>
          <th>Closing Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr
              className={
                row.status === "Closed"
                  ? "table-success"
                  : row.status === "Open"
                  ? "table-danger"
                  : "table-warning"
              }
              key={row.id}
            >
              <td>{row.id}</td>
              <td>{row.matter}</td>
              <td>{row.status}</td>
              <td>{row.openDate}</td>
              <td>{row.closeDate}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No Tickets to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
