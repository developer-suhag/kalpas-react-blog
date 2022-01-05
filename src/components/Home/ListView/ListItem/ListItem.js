import React from "react";
import "../ListView.css";
import demoImg from "../../../../images/demo-post-img.jpg";
import { FaTimes } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removePost } from "../../../../redux/slices/postSlice";

const ListItem = ({ post }) => {
  const { id, title, body } = post;
  //   handleRemove
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removePost(id));
  };
  return (
    <div className="d-flex justify-content-between align-items-center gap-3">
      <div className="list-item-view d-flex align-items-center gap-4 mb-4 p-4 bg-white shadow-sm">
        <img src={demoImg} alt="" />
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
  );
};

export default ListItem;
