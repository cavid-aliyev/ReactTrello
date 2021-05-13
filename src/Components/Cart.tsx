import React from "react";

interface ICart {
  text: string;
}

const Cart: React.FC<ICart> = ({ text }) => {
  return <div className="cart">{text}</div>;
};

export default Cart;
