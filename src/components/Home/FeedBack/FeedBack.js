import React from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import user from "../../../images/user.jpg";
import "./FeedBack.css";

const FeedBack = ({ showFeedBack, handleFeedBackClose }) => {
  // feedback

  return (
    <>
      <Offcanvas
        className="w-75 feedback"
        show={showFeedBack}
        onHide={handleFeedBackClose}
      >
        <Row>
          <Col md={4}>
            <div className="side-bar py-5 ps-2">
              {/* user  */}
              <div className="d-flex align-items-center gap-3 bg-white p-2 rounded-3 shadow">
                <div>
                  <img className="user" src={user} alt="" />
                </div>
                <div>
                  <h4>Hi, Reader</h4>
                  <p>Here's your News!</p>
                </div>
              </div>

              {/* feedback  */}
              <div className="bg-white p-3 mt-4 rounded-3 shadow text-center">
                <h3>Have a Feedback?</h3>
                <Button
                  onClick={handleFeedBackClose}
                  className="kalpas-btn-feedback"
                  variant=""
                >
                  We're lisentening!
                </Button>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="">
                <h3> Thank you so much for taking the time!</h3>
                <p>Please provide the below details</p>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Col>
        </Row>
      </Offcanvas>
    </>
  );
};

export default FeedBack;
