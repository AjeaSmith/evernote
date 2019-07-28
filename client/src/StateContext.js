import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  // this.state = {loginToggle: false}
  // this.setState
  const [state, setState] = useState({ loginToggle: false });
  return (
    <StateContext.Provider value={[state, setState]}>
      {children}
    </StateContext.Provider>
  );
};
