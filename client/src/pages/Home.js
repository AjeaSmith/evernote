import React, { useContext } from "react";
import Editor from "../components/Editor";
import Sidebar from "../components/SideBar";
import "./Home.css";
import { StateContext } from "../StateContext";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";
const Home = () => {
  const [state] = useContext(StateContext);
  return (
    <React.Fragment>
      {state.loginToggle ? <LoginModal /> : ""}
      {state.registerToggle ? <RegisterModal /> : ""}
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
