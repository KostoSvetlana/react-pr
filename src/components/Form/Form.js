import { useState,useEffect } from "react";
import "./Form.css";
export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log("did mount");
   

    return () => {
      console.log("will unmount");
    };
  }, []);

  return (
    <form className="btn" onSubmit={handleSubmit}>
       <input value={value} onChange={handleChange} type="text"  /> 
       <input type="submit" /> 
     
    </form>
  );
};