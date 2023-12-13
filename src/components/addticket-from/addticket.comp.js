import React from "react";
import { Jumbotron, Form, Row, Col, Button } from "react-bootstrap";

import PropTypes from "prop-types";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  formData,
  formErrorData,
}) => {
  // console.log(formData);
  return (
    <Jumbotron className="mt-3 br-0">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              className="br-0"
              onChange={handleOnChange}
              placeholder="Enter Subject"
              required
            />
            <Form.Text className="text-danger">
              {formErrorData.subject && "* Subject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={formData.issueDate}
              className="br-0"
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            value={formData.details}
            className="br-0"
            onChange={handleOnChange}
            rows="5"
            placeholder="Additional details or comments..."
            required
          />
        </Form.Group>
        <Button type="submit" variant="info" className="br-0" block>
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formErrorData: PropTypes.object.isRequired,
};
