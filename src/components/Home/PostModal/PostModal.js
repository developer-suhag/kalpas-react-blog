import React from "react";
import { Button, Modal } from "react-bootstrap";

const PostModal = ({ postModalShow, handleModalClose, post }) => {
  const { title, body } = post;
  return (
    <>
      <Modal centered show={postModalShow} onHide={handleModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-uppercase">{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-capitalize">{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="" className="kalpas-btn" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostModal;
