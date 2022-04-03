import { useEffect, useRef, useState } from "react";
import { ChatList } from "../../components/ChatList/ChatList";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { author } from "../../utils/const";
import { Navigate, useNavigate, useParams } from "react-router";

const chatList= [
    { id: "chat1", name: 'Chat1' },
    { id: "chat2", name: 'Chat2' },
    { id: "chat3", name: 'Chat3' },
    { id: "chat4", name: 'Chat4' },
];

const initMessage={
    chat1:[],
    chat2:[],
    chat3:[],
    chat4:[]
}

export function Chat() {
    const {id} = useParams();
  const [messages, setMessages] = useState(initMessage);
  
  const timeout = useRef;


  const addMessage = (newMsg) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const sendMessage = (text) => {
    addMessage({
      author: author.me,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1] 
    if (lastMessage?.author === author.me) {
      timeout.current = setTimeout(() => {
        addMessage({
          author: author.bot,
          text: "This is a message from a robot",
          id: `msg-${Date.now()}`,
        });
      }, 1000);
    };


    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

    if (!messages[id]) {
    return <Navigate to="/chat" replace />
    };

  return (
    <div className='App'>
    <ChatList sx={{ display: 'grid' }} chatList={chatList} />
    {id &&(
        <div>
             <MessageList messages={messages[id]} />
            <Form onSubmit={sendMessage} />
        </div>
    )}
    </div>
  );
}