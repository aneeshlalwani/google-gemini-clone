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

  // function for typing effect
  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };
  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    const response = await runChat(input);
    let responseArray = response.split("**");
    let newResponse;
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponseWithLineBreak = newResponse.split("*").join("</br>");
    let newResponseArray = newResponseWithLineBreak.split(" "); // if there is space, it means there is new word

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
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
