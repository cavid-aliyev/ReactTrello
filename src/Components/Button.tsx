import React from "react";

interface IButton {
  text: string;
}

const Button: React.FC<IButton> = ({ text}) => {
  return <div className="button">{text}</div>;
};

export default Button;
