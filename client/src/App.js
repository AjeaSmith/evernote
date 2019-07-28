import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { StateProvider } from "./StateContext";

function App() {
  return (
    <StateProvider>
      <React.Fragment>
        <Home />
      </React.Fragment>
    </StateProvider>
  );
}
export default App;
