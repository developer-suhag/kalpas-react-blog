import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removePost } from "../../../../redux/slices/postSlice";
import PostModal from "../../PostModal/PostModal";
import "../GirdView.css";

const GridItem = ({ post }) => {
  const { id, title, body } = post;

  //   handleRemove
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removePost(id));
  };

  //   modal
  const [postModalShow, setPostModalShow] = useState(false);

  const handleModalClose = () => setPostModalShow(false);
  const handleModalShow = () => setPostModalShow(true);
  return (
    <>
      <Col>
        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          onClick={handleModalShow}
          className="gird-item-box p-3 bg-white shadow-sm"
        >
          <div className="position-relative">
            <h3 className="mt-4 title">{title.slice(0, 40)}</h3>
            <p>{body.slice(0, 70)}...</p>
            <Button
              onClick={() => handleRemove(id)}
              variant=""
              className="grid-close-icon"
            >
              <FaTimes />
            </Button>
          </div>
          <div>
            <img
              className="img-fluid"
              src="https://i.ibb.co/2gtFpMn/demo-post-img.jpg"
              alt=""
            />
          </div>
        </div>
      </Col>
      {/* modal  */}
      <PostModal
        postModalShow={postModalShow}
        handleModalClose={handleModalClose}
        post={post}
      />
    </>
  );
};

export default GridItem;
