import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <SideBar />
          </Col>
          <Col md={8}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageLayout;
