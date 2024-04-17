import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  // state for storing the recent prompts data
  const [recentPrompt, setRecentPrompt] = useState("");
  // state for storing the history of prompts data
  const [prevPrompt, setPrevPrompt] = useState([]);
  //
  const [showResult, setShowResult] = useState(false);
  // for loading
  const [loading, setLoading] = useState(false);
  // state for displaying the result on web page
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    const response = await runChat(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  };
  /* Calls onSent immediately with prompt when ContextProvider component is rendered */
  // onSent("What is node.js?");

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
