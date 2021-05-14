import React, { ReactChildren, ReactNode } from "react";

interface ICart {
  children: string | ReactNode;
}

const Cart: React.FC<ICart> = ({ children }) => {
  return <div className="cart">
    {children}
    </div>;
};

export default Cart;
