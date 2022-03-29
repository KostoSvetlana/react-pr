import "./Message.styles.scss";

export const Message = ({ author, text }) => {
  return (
    <div className="message">
      <span>{author}:{text}</span>
    </div>
  );
};

