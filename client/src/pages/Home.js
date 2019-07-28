import React, { useContext } from "react";
import Editor from "../components/Editor";
import Sidebar from "../components/SideBar";
import "./Home.css";
import { StateContext } from "../StateContext";
import LoginModal from "../components/LoginModal";
const Home = () => {
  const [state] = useContext(StateContext);
  console.log("home", state.loginToggle);
  return (
    <React.Fragment>
      {state.loginToggle ? <LoginModal /> : ""}
      <div className="home-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="editor">
          <Editor />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
