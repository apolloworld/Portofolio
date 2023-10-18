import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Denys Tverdokhlib</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Sevastopolska 13 Smila, Ukraine 20700</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
