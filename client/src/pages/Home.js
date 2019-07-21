import React from "react";
import Editor from "../components/Editor";
import Sidebar from "../components/SideBar";
import './Home.css'
const Home = () => {
  return (
    <React.Fragment>
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
