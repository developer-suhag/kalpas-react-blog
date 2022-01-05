import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removePost } from "../../../../redux/slices/postSlice";
import PostModal from "../../PostModal/PostModal";
import "../ListView.css";

const ListItem = ({ post }) => {
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
      <div
        onClick={handleModalShow}
        className="d-flex justify-content-between align-items-center gap-3"
      >
        <div className="list-item-view d-flex align-items-center gap-4 mb-4 p-4 bg-white shadow-sm">
          <img src="https://i.ibb.co/TWCYHZh/demo-post-img.jpg" alt="" />
          <div>
            <h3 className="title">{title}</h3>
            <p>{body}</p>
          </div>
        </div>
        <Button
          onClick={() => handleRemove(id)}
          variant=""
          className="close-icon"
        >
          <FaTimes />
        </Button>
      </div>
      <PostModal
        postModalShow={postModalShow}
        handleModalClose={handleModalClose}
        post={post}
      />
    </>
  );
};

export default ListItem;
