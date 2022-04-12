import { Link, Outlet } from 'react-router-dom';
import "./ChatList.css";
import { Form } from "../Form/Form";
import { useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../../store/chats/selectors';
import { addChat } from '../../store/chats/actions';
import { clearMessages, initMessagesForChat } from '../../store/messages/actions';
import { deleteChat } from '../../store/chats/actions';

export const ChatList = () => {
  const chats = useSelector(selectChats);
  const dispatch =useDispatch();
  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
    };

    dispatch(addChat(newChat));
    dispatch(initMessagesForChat(newChat.id))
  };
  
const handleRemoveChat = (id) => {
dispatch(deleteChat(id));
dispatch(clearMessages(id));
};

  return (
    <>
      <div className="chat-list">
        {chats.map((chat) => (
          <div key={chat.id}>
            <Link to={`/chat/${chat.id}`}>{chat.name}</Link>
            <span onClick={() => handleRemoveChat(chat.id)}>delete</span>
          </div>
        ))}
      </div>
      <Form onSubmit={handleSubmit} />
      <Outlet />
    </>
  );
};