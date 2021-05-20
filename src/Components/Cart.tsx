import React, { ReactNode } from "react";
import { Draggable } from "react-beautiful-dnd";
import clearIcon from "../assets/clear.svg";

interface ICart {
  children?: string | ReactNode;
  cartIndex?: number;
  panelIndex?: number | undefined;
  onRemove?: any;
}

const Cart: React.FC<ICart> = ({ cartIndex, panelIndex, children, onRemove }) =>
  typeof cartIndex !== "undefined" ? (
    <Draggable
      draggableId={`cart-${panelIndex}-${cartIndex}`}
      index={cartIndex}
    >
      {(provided, snapshot) => (
        <div
          className="cart"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>{children}</span>
          <div
            onClick={onRemove.bind(this, panelIndex, cartIndex)}
            className="remove-btn"
          >
            <img src={clearIcon} alt="Clear svg icon" />
          </div>
        </div>
      )}
    </Draggable>
  ) : (
    <div className="cart">{children}</div>
  );

export default Cart;
