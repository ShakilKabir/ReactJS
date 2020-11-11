import React from "react";
const Alert = ({ value, type, text }) => {
  return <p className={value ? `alert alert-${type}` : "alert"}>{text}</p>;
};
export default Alert;
