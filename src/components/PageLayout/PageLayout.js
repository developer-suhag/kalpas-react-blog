import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Container fluid className="ps-0">
        <Row>
          <Col md={3}>
            <SideBar />
          </Col>
          <Col md={9}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageLayout;
