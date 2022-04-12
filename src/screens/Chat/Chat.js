import { useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";


import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { author } from "../../utils/const";
import { selectMessages } from "../../store/messages/selector";
import { addMessage } from "../../store/messages/actions";

export function Chat() {
  const { id } = useParams();
const messages = useSelector(selectMessages);
const dispatch = useDispatch();
  const timeout = useRef();
  const wrapperRef = useRef()

  const sendMessage = (text) => {
    dispatch(
    addMessage(
    {
      author: author.me,
      text,
      id: `msg-${Date.now()}`,
    },
    id
    )
    );
  };

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1] 
    if (lastMessage?.author === author.me) {
      timeout.current = setTimeout(() => {
        dispatch(
        addMessage({
          author: author.bot,
          text: "This is a message from a robot",
          id: `msg-${Date.now()}`,
        },
        id
        )
        );
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
      <div className="App" ref={wrapperRef}>
        <div>
          <MessageList messages={messages[id]} />
          <Form onSubmit={sendMessage} />
        </div>
      </div>
    );
  }