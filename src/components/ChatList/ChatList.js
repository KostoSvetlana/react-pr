import { Link, Outlet } from 'react-router-dom';
import "./ChatList.css";

const chatList = ([
  { id: "chat1", name: 'Chat1' },
  { id: "chat2", name: 'Chat2' },
  { id: "chat3", name: 'Chat3' },
  { id: "chat4", name: 'Chat4' },
]);

export const ChatList = () => (
  <>
    <div className="chat-list">
      {chatList.map((chat) => (
        <Link to={`/chat/${chat.id}`} key={chat.id}>
          {chat.name}
        </Link>
      ))}
    </div>
    <Outlet />
  </>
);