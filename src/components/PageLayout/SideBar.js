import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import user from "../../images/user.jpg";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <div className="side-bar shadow py-5 px-4">
      {/* user  */}
      <div className="d-flex align-items-center gap-3 bg-white p-2 rounded-3 shadow">
        <div>
          <img className="user" src={user} alt="" />
        </div>
        <div>
          <h4>Hi, Reader</h4>
          <p>Here's your News!</p>
        </div>
      </div>

      {/* view toggle  */}
      <div className="bg-white p-3 mt-4 rounded-3 shadow text-center">
        <h3>View Toggle</h3>
        <div className="d-flex justify-content-center mt-3 align-items-center toggle-icon">
          <NavLink
            className={(navInfo) => (navInfo.isActive ? "nav-selected" : "")}
            to="/home/gridView"
          >
            <div>
              <BsFillGrid1X2Fill />
            </div>
          </NavLink>
          <NavLink
            className={(navInfo) => (navInfo.isActive ? "nav-selected" : "")}
            to="/home/listView"
          >
            <div>
              <AiOutlineUnorderedList />
            </div>
          </NavLink>
        </div>
      </div>

      {/* feedback  */}
      <div className="bg-white p-3 mt-4 rounded-3 shadow text-center">
        <h3>Have a Feedback?</h3>
        <Button className="feed-back-btn" variant="">
          We're lisentening!
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
