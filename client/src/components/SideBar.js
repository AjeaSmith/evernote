import React, { useContext } from "react";
import "./Sidebar.css";
import Notes from "../components/Notes";
import { StateContext } from "../StateContext";

const SideBar = () => {
  const [state, setState] = useContext(StateContext);
  const toggleLogin = () => {
    setState({ ...state, loginToggle: true });
  };
  const toggleRegister = () => {
    setState({ ...state, registerToggle: true });
  };
  return (
    <React.Fragment>
      <section className="sidebar-container h-full mb-4">
        <div className="header-container border-r-0 border-gray-400 py-3 shadow">
          <div className="header-top w-full">
            <div className="header-1">
              <h2 className="text-2xl sm:text-xl md:text-2xl">All Notes</h2>
            </div>
            <div className="header-2 text-blue-500">
              <p className="inline-block pr-3">
                <button
                  className="text-blue-500 hover:btn-color text-white py-2 px-2 rounded"
                  type="button"
                  onClick={toggleLogin}
                >
                  Login
                </button>
              </p>
              <p className="inline-block">
                <button
                  className="text-blue-500 hover:btn-color text-white py-2 px-2 rounded"
                  type="button"
                  onClick={toggleRegister}
                >
                  Register
                </button>
              </p>
            </div>
          </div>
          <div className="notes-bottom w-full">
            <div>
              <h3>1 notes</h3>
            </div>
            <div>
              <p>filter options</p>
            </div>
          </div>
        </div>
        <div className="list-container mt-16 pl-2 pr-2">
          <Notes />
        </div>
      </section>
    </React.Fragment>
  );
};
export default SideBar;
