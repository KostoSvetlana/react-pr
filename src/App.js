import "./App.css";
import React, { useEffect, useState } from "react";
import { Message } from "./components/Message/Message";
import { Form } from "./components/Form/Form";
import { author } from "./utils/const";
import { MessageList } from "./components/MessageList/MessageList";

function App() {
  const [messages, setMessages] = useState([]);


  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  };

  const sendMessage = (text) => {
    addMessage({
      author: author.me,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1]?.author === author.me) {
      timeout = setTimeout ( () => {
        addMessage({
          author: author.bot,
          text: "Hi friend",
          id: `msg-${Date.now()}`,
        });
     
      },1000);
        
    }
    return () => clearTimeout(timeout);
  }, [messages]);

  

  return (
    <div className="App">
      <MessageList messages={messages} />
      <Form onSubmit={sendMessage} />
     
    </div>
  );
}

export default App;