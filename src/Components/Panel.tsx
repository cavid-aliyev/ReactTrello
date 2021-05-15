import React from "react";
import { Cart, AddForm } from "../Components";

interface IPanel {
  carts: any[] | null;
}

const Panel: React.FC<IPanel> = ({ carts }) => {
  return (
    <div className='panel'>
      {carts && (<div className="panel__items">
        {carts.map((cart, index) => (
          <Cart key={index}>{cart.text}</Cart>
        ))}
      </div>)}
      <AddForm />
    </div>
  );
};

export default Panel;
