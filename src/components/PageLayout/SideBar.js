import React from "react";
import "./Sidebar.css";
import user from "../../images/user.jpg";
const SideBar = () => {
  return (
    <div className="side-bar shadow py-5 px-4">
      <div className="d-flex align-items-center gap-3 bg-white p-2 rounded-3 shadow-sm">
        <div>
          <img className="user" src={user} alt="" />
        </div>
        <div>
          <h3>Hi, Reader</h3>
          <p>Here's your News!</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
