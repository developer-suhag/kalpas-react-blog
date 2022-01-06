import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

const FeedBack = ({ showFeedBack, handleFeedBackClose }) => {
  //   const [showFeedBack, setShowFeedBack] = useState(false);

  //   const handleFeedBackClose = () => setShowFeedBack(false);
  //   const handleFeedBackShow = () => setShowFeedBack(true);
  return (
    <>
      {/* <Button variant="primary" onClick={handleFeedBackShow}>
        Launch
      </Button> */}

      <Offcanvas show={showFeedBack} onHide={handleFeedBackClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FeedBack;
