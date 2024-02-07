import React from "react";

export const Button = (props) => {
  const { type = "button",title,onClick, } = props;

  return (
    <button
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};