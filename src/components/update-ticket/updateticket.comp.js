import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>
        Please reply your message here or update the ticket.
      </Form.Text>
      <Form.Control
        as="textarea"
        row="5"
        name="detail"
        value={msg}
        onChange={handleOnChange}
        className="br-0 text-secondary"
      />
      <div className="text-right mt-3 mb-3">
        <Button variant="info">Reply</Button>
      </div>
    </Form>
  );
};

UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};
