import React, { useState } from "react";
import { Col } from "react-bootstrap";
import PostModal from "../../PostModal/PostModal";
import "../GirdView.css";

const GridItem = ({ post }) => {
  const { id, title, body } = post;
  //   modal
  const [postModalShow, setPostModalShow] = useState(false);

  const handleModalClose = () => setPostModalShow(false);
  const handleModalShow = () => setPostModalShow(true);
  return (
    <>
      <Col>
        <div
          onClick={handleModalShow}
          className="gird-item-box p-3 bg-white shadow-sm"
        >
          <div>
            <h3>{title.slice(0, 40)}</h3>
            <p>{body.slice(0, 70)}...</p>
          </div>
          <div>
            <img
              className="img-fluid"
              src="https://i.ibb.co/TWCYHZh/demo-post-img.jpg"
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
