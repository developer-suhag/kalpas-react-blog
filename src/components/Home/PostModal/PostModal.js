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

        <Modal.Body className="text-capitalize p-3">
          <div className="text-center mb-3">
            <img
              className="img-fluid w-100"
              src="https://i.ibb.co/TWCYHZh/demo-post-img.jpg"
              alt=""
            />
          </div>
          <p>{body}</p>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="" className="kalpas-btn" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostModal;
