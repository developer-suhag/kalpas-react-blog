import React from "react";
import { Button, Modal } from "react-bootstrap";

const PostModal = ({ postModalShow, handleModalClose }) => {
  //   const [postModalShow, setPostModalShow] = useState(false);

  //   const handleModalClose = () => setPostModalShow(false);
  //   const handleModalShow = () => setPostModalShow(true);
  return (
    <>
      {/* <Button variant="primary" onClick={handleModalShow}>
        Launch demo modal
      </Button> */}

      <Modal centered show={postModalShow} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostModal;
