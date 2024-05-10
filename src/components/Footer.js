import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Alex Ji</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Vakhtanga Kikabidze 13, Kyiv, Ukraine, 03134</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
