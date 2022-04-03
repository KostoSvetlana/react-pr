import { useState, useEffect, useRef } from "react";
import "./Form.css";
import { TextField, Button } from "@mui/material";
export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState();

  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

 
  useEffect(()=>{
    inputRef.current?.focus()
})

  return (
    <form className="btn" onSubmit={handleSubmit}>
      <TextField value={value} onChange={handleChange} inputRef={inputRef} />
       <Button className="mybtn" type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};