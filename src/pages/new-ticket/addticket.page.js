import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/breadcrumb.comp";
import { AddTicketForm } from "../../components/addticket-from/addticket.comp";
import { shortText } from "../../utils/validation";

const initialFormData = {
  subject: "",
  issueDate: "",
  details: "",
};

const initialFormErrorData = {
  subject: false,
  issueDate: false,
  details: false,
};

export const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrorData, setFormErrorData] = useState(initialFormErrorData);
  useEffect(() => {}, [formData, formErrorData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // to keep the previous data
      [name]: value, // to update the current data
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormErrorData(initialFormErrorData);
    const isSubjectValid = await shortText(formData.subject);

    setFormErrorData({
      ...initialFormErrorData,
      subject: !isSubjectValid,
    });

    alert("Form submitted");
    console.log("Form submit request", formData);
  };

  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            formData={formData}
            formErrorData={formErrorData}
          />
        </Col>
      </Row>
    </Container>
  );
};
