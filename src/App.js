import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { Message } from "./components/Message/Message";
import { Form } from "./components/Form/Form";
import { author } from "./utils/const";
import { MessageList } from "./components/MessageList/MessageList";
import {ChatList} from './components/ChatList/ChatList'


function App() {
  const [messages, setMessages] = useState([]);

  const [chatList] = useState([
    { id: "1", name: 'chat1' },
    { id: "2", name: 'chat2' },
    { id: "3", name: 'chat3' },
    { id: "4", name: 'chat4' },
    { id: "5", name: 'chat5' },
  ]);



  const timeout = useRef();
  const wrapperRef = useRef();
  
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

    if (messages[messages.length - 1]?.author === author.me) {
      timeout.current = setTimeout ( () => {
        addMessage({
          author: author.bot,
          text: "Hi friend",
          id: `msg-${Date.now()}`,
        });
     
      },1000);
        
    }
    return () => clearTimeout(timeout.current);
  }, [messages]);

  
  const handleScroll = () => {
    wrapperRef.current?.scrollTo({ x: 0, y: 0 });
  };
  return (
    <div className="App" ref={wrapperRef}>
      <ChatList chatList={chatList} />
      <MessageList messages={messages} />
      <Form onSubmit={sendMessage} />
      <button onClick={handleScroll}>scroll</button>
    </div>
  );
}

export default App;