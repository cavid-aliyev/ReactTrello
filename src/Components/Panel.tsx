import React from "react";
import { Cart, AddForm } from "../Components";

interface IPanel {
  carts: any[] | null;
  title: string;
}

const Panel: React.FC<IPanel> = ({ title, carts }) => {
  return (
    <div className="panel">
      <div className="panel__title">
        <b>{title}</b>
      </div>
      {carts && (
        <div className="panel__items">
          {carts.map((cart, index) => (
            <Cart key={index}>{cart}</Cart>
          ))}
        </div>
      )}
      <AddForm />
    </div>
  );
};

export default Panel;
