import { useDispatch, useSelector, connect } from "react-redux";
import { toggleCheckbox, setName } from "../../store/profile/actions";
import { Form } from "../../components/Form/Form";
import { selectName, selectShowName } from "../../store/profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const handleClick = () => {
    dispatch(toggleCheckbox)
  };
  const handleSubmit = (text) => {
    dispatch(setName(text));
  };

  return (
  <>
    <h3>Profile page</h3>
    {showName && <span>{name}</span>}
      <button onClick={handleClick}>change show name</button>
      <Form onSubmit={handleSubmit} />
    </>
  );
};