import React from "react";
import { Cart, AddForm } from "../Components";

interface IPanel {
  items: any[];
}

const Panel: React.FC<IPanel> = ({ items }) => {
  return (
    <div className="panel">
      <div className="panel__items">
        {items.map((cart) => (
          <Cart>{cart.text}</Cart>
        ))}
      </div>
      <AddForm />
    </div>
  );
};

export default Panel;
