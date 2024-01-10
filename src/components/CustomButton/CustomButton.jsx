import React from "react";
import "./CustomButton.css";

function CustomButton({ text , type , onClick }) {
  return <button type={type} onClick={onClick} id="main_btn"> {text}</button>;
} 

export default CustomButton;
