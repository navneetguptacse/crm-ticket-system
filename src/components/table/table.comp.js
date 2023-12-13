import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

export const TicketTable = ({ tickets }) => {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
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
              <td>{row.subject}</td>
              <td>{row.status}</td>
              <td>{row.openDate}</td>
              <td>{row.closeDate}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              No Tickets to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
