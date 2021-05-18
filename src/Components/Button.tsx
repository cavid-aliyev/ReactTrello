import React from "react";

interface IButton {
  text: string;
  onClick?: any;
}

const Button: React.FC<IButton> = ({ onClick, text }) => {
  return (
    <div onClick={onClick} className="button">
      {text}
    </div>
  );
};

export default Button;
