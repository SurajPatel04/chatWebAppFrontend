import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChatPage from "../src/components/ChatPage";
import { motion } from "framer-motion";

function App() {
  const sentence = "This is an example of words appearing one by one.".split(
    " ",
  );

  return (
    <div>
      <ChatPage />
    </div>
  );
}

export default App;
