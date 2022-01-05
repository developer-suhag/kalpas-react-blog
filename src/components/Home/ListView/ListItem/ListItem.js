import React from "react";
import "../ListView.css";
import demoImg from "../../../../images/demo-post-img.jpg";
import { FaTimes } from "react-icons/fa";

const ListItem = ({ post }) => {
  const { title, body } = post;
  return (
    <div className="d-flex justify-content-between align-items-center gap-3">
      <div className="list-item-view d-flex align-items-center gap-4 mb-4 p-4 bg-white shadow-sm">
        <img src={demoImg} alt="" />
        <div>
          <h3 className="title">{title}</h3>
          <p>{body}</p>
        </div>
      </div>
      <div className="close-icon">
        <FaTimes />
      </div>
    </div>
  );
};

export default ListItem;
