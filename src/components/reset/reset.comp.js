import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Reset = ({ handleOnChange, handleOnResetSubmit, formSwitcher, email }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Reset Password</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Enter email"
                  className="br-0"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                
                <Button variant="info" type="submit">
                  Reset
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#!" className="text-info" onClick={()=>formSwitcher('login')}>
              Login Now?
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Reset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
