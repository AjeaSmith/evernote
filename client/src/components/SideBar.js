import React from "react";
import "./Sidebar.css";
import Notes from "../components/Notes";

const SideBar = () => {
  return (
    <React.Fragment>
      <section className="sidebar-container">
        <div className="header-container mb-12">
          <div className="header-top mb-12">
            <div className="header-title">
              <h3>All Notes</h3>
            </div>
            <div className="header-account">
              <div className="header-login pr-3">
                <p className="text-blue-500">
                  <button>Login</button>
                </p>
              </div>
              <div className="header-register">
                <p className="text-blue-500">
                  <button>Register</button>
                </p>
              </div>
            </div>
          </div>
          <div className="header-below">
            <div className="header-notes">1 notes</div>
            <div className="header-filter">filter option</div>
          </div>
        </div>
        <div className="note-list w-full px-2">
          <Notes />
        </div>
      </section>
    </React.Fragment>
  );
};
export default SideBar;
