// #1. Import JS RX dependencies from RX Library
import React, { useState, createContext } from "react";

// #2. Export Context Object using Context API
export const Context = createContext();

// #3. Functional Component: ContextProvider Export
export const ContextProvider = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  const value = {
    username,
    setUsername,
    secret,
    setSecret,
  };

  // #4. JSX Return statement
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};