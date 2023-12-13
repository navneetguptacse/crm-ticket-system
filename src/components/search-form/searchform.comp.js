import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export const SearchForm = ({ handleOnChange, str }) => {
  //   console.log("str :>> ", str);
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm={3}>
          Search:
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            name="searchStr"
            placeholder="Search..."
            onChange={handleOnChange}
            value={str}
            className="br-0"
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
