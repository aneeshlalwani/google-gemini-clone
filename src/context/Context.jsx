import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    // triggers the execution of runChat with provided prompt
    await runChat(prompt);
  };
  // Calls onSent immediately with prompt when ContextProvider component is rendered
  onSent("What is node.js?");

  const contextValue = {};
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
