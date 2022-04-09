import "./Message.styles.scss";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";

export const Message = ({ author, text, theme }) => {
  console.log(theme);
  return (
    <div className="message">
    <span style={{ color: theme === "dark" ? "red" : "blue" }}>
      {author}:
    </span>
    <span>{text}</span>
  </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string,
}

const withThemeContext = (Component) => (props) => {
  const { theme } = useContext(ThemeContext);

  return <Component {...props} theme={theme} />;
};

export const MessageWithBlueColor = withThemeContext(Message);