import React, { useContext } from "react";
import "./Sidebar.css";
import Notes from "../components/Notes";
import { StateContext } from "../StateContext";

const SideBar = () => {
  const [state, setState] = useContext(StateContext);
  const toggleLogin = () => {
    setState({ ...state, loginToggle: !state.loginToggle });
    console.log('updated state', state);
  };
  return (
    <React.Fragment>
      <section className="sidebar-container">
        <div className="header-container w-full border-r-0 border-gray-500 shadow">
          <div className="header-top mb-12">
            <h1 className="header-title text-2xl">All Notes</h1>
            <div className="header-account">
              <div className="header-login pr-3">
                <p className="text-blue-600">
                  <button onClick={toggleLogin}>Login</button>
                </p>
              </div>
              <div className="header-register">
                <p className="text-blue-600">
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
        <div className="note-list w-full px-2 mt-12">
          <Notes />
        </div>
      </section>
    </React.Fragment>
  );
};
export default SideBar;
