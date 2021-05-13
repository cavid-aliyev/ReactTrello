import React from "react";
import { Cart, Button } from "../Components";

interface IPanel {
  items: any[];
}

const Panel: React.FC<IPanel> = ({ items }) => {
  return (
    <div className="panel">
      {items.map((cart) => (
        <Cart {...cart} />
      ))}
    </div>
  );
};

export default Panel;
