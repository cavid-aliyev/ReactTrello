import React from "react";
import { Cart, AddForm } from "../Components";
import clearIcon from "../assets/clear.svg";

interface IPanel {
  carts?: any[] | null;
  title?: string;
  onAddPanel?: any
  onAddCart?: any
}

const Panel: React.FC<IPanel> = ({onAddPanel, onAddCart, title, carts}) => {
  console.log(onAddPanel, onAddCart);
  return (
    <div className="panel">
      {title && (
        <div className="panel__title">
          <b>{title}</b>
          <img
            src={clearIcon}
            alt="Clear svg Icon"
          />
        </div>
      )}
      {carts && (
        <div className="panel__items">
          {carts.map((cart, index) => (
            <Cart key={index}>{cart}</Cart>
          ))}
        </div>
      )}
      <AddForm isEmptyPanel={!carts} onAddPanel={onAddPanel} onAddCart={onAddCart}/>
    </div>
  );
};

export default Panel;
