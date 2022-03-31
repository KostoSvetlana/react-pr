import "./Message.styles.scss";
import PropTypes from 'prop-types';

export const Message = ({ author, text }) => {
  return (
    <div className="message">
      <span>{author}:{text}</span>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string,
}
